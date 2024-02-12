"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { SignInButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="border-b">
      <div className="h-16 container flex justify-between items-center">
        <div>Thumbnail Rater</div>

        <div>
          <SignedIn>
            <Link href="/create">Create Test</Link>
          </SignedIn>
          <SignedOut>
            <Link href="/pricing">Pricing</Link>
            <Link href="/about">About</Link>
          </SignedOut>
        </div>

        <div className="flex gap-4 items-center">
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
