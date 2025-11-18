import mongoose, { Mongoose } from "mongoose";

import logger from "./logger";
import "@/database";

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error("MONGODB_URI is not defined");
}

/**
 * IMPORTANT: MongoDB Atlas IP Whitelisting
 * 
 * For serverless deployments (like Vercel), you MUST whitelist 0.0.0.0/0 in MongoDB Atlas.
 * 
 * This is safe because:
 * - Users never connect directly to MongoDB (they go through your API)
 * - Only your serverless functions connect to MongoDB
 * - Users can't access MongoDB without your connection string and credentials
 * 
 * The IP whitelist controls SERVER connections, not user connections.
 * 
 * To configure:
 * 1. Go to MongoDB Atlas → Network Access
 * 2. Click "Add IP Address"
 * 3. Enter: 0.0.0.0/0
 * 4. Add comment: "Vercel Serverless Functions"
 * 5. Click Confirm
 */

interface MongooseCache {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

declare global {
  // eslint-disable-next-line no-var
  var mongoose: MongooseCache;
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

const dbConnect = async (): Promise<Mongoose> => {
  if (cached.conn) {
    logger.info("Using existing mongoose connection");
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGODB_URI, {
        dbName: "devflow",
        serverSelectionTimeoutMS: 5000, // Timeout after 5s if server selection fails
        socketTimeoutMS: 45000, // Close sockets after 45s of inactivity
        connectTimeoutMS: 10000, // Give up initial connection after 10s
      })
      .then((result) => {
        logger.info("Connected to MongoDB");
        return result;
      })
      .catch((error) => {
        // Clear the promise cache on error to allow retry
        cached.promise = null;
        
        // Provide helpful error message for IP whitelist issues
        if (
          error.name === "MongooseServerSelectionError" ||
          error.message?.includes("whitelist")
        ) {
          logger.error(
            "MongoDB connection failed: IP whitelist issue. " +
              "Please whitelist 0.0.0.0/0 in MongoDB Atlas Network Access. " +
              "Error: " + error.message
          );
        } else {
          logger.error("Error connecting to MongoDB", error);
        }
        throw error;
      });
  }

  cached.conn = await cached.promise;

  return cached.conn;
};

export default dbConnect;
