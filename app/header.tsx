"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { SignInButton, SignOutButton, useSession } from "@clerk/nextjs";
import { User2Icon } from "lucide-react";
import React from "react";

const Header = () => {
  const { isSignedIn } = useSession();
  return (
    <div className="border-b">
      <div className="h-16 container flex justify-between items-center">
        <div>Thumbnail Rater</div>
        <div className="flex gap-3 items-center">
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default Header;
