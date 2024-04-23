/* eslint-disable @typescript-eslint/no-empty-function */
"use client";
import { signIn } from "next-auth/react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Button } from "@/components/ui/button";
import { DEFAULT_LOGIN_REDIRECT } from "@/rootsrc/routes";

export const Social = () => {
  const onClick = (provider: "google" | "github") => {
    void signIn(provider, { callbackUrl: DEFAULT_LOGIN_REDIRECT });
  };
  return (
    <div className="flex w-full items-center gap-x-2">
      <Button
        className="w-full"
        size="lg"
        variant="outline"
        onClick={() => {
          onClick("google");
        }}
      >
        <FcGoogle className="h-5 w-5"></FcGoogle>
      </Button>
      <Button
        className="w-full"
        size="lg"
        variant="outline"
        onClick={() => {
          onClick("github");
        }}
      >
        <FaGithub className="h-5 w-5"></FaGithub>
      </Button>
    </div>
  );
};
