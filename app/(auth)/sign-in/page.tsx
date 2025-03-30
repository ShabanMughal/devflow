"use client";

import AuthForm from "@/components/forms/AurhForm";
import { SignInSchema } from "@/lib/validation";
import React from "react";

const SignIn = () => {
  return (
    <AuthForm
      formType="SIGN_IN"
      schema={SignInSchema}
      defaultValues={{ email: "", password: "" }}
      onSubmit={(data) => Promise.resolve({ success: true, data })}
    />
  );
};

export default SignIn;
