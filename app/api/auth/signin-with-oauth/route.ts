import mongoose from "mongoose";
import { NextResponse } from "next/server";
import slugify from "slugify";

import Account from "@/database/account.model";
import User from "@/database/user.model";
import handleError from "@/lib/handlers/error";
import { ValidationError } from "@/lib/http-errors";
import dbConnect from "@/lib/mongoose";
import { SignInWithOAuthSchema } from "@/lib/validations";

// Increase timeout for OAuth sign-in which involves database transactions
// Vercel Hobby: 10s, Pro: 60s, Enterprise: 300s
export const maxDuration = 30;

export async function POST(request: Request) {
  const { provider, providerAccountId, user } = await request.json();

  // Validate before connecting to database to fail fast
  const validatedData = SignInWithOAuthSchema.safeParse({
    provider,
    providerAccountId,
    user,
  });

  if (!validatedData.success) {
    return handleError(
      new ValidationError(validatedData.error.flatten().fieldErrors),
      "api"
    ) as APIErrorResponse;
  }

  await dbConnect();

  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const { name, username, email, image } = user;

    const slugifiedUsername = slugify(username, {
      lower: true,
      strict: true,
      trim: true,
    });

    // Find or create user - optimized to reduce database round trips
    let existingUser = await User.findOne({ email }).session(session);

    if (!existingUser) {
      [existingUser] = await User.create(
        [{ name, username: slugifiedUsername, email, image }],
        { session }
      );
    } else {
      // Only update if data has changed
      const needsUpdate =
        existingUser.name !== name || existingUser.image !== image;

      if (needsUpdate) {
        await User.updateOne(
          { _id: existingUser._id },
          { $set: { name, image } },
          { session }
        );
      }
    }

    // Check if account exists, create if not
    const existingAccount = await Account.findOne({
      userId: existingUser._id,
      provider,
      providerAccountId,
    }).session(session);

    if (!existingAccount) {
      await Account.create(
        [
          {
            userId: existingUser._id,
            name,
            image,
            provider,
            providerAccountId,
          },
        ],
        { session }
      );
    }

    await session.commitTransaction();

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    await session.abortTransaction();
    return handleError(error, "api") as APIErrorResponse;
  } finally {
    await session.endSession();
  }
}
