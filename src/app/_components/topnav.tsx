"use client";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import Link from "next/link";

export function TopNav() {
  const user = useUser();
  return (
    <nav className="flex w-full items-center justify-between border-b-2 text-xl font-semibold">
      <Link href={"/"}>
        <div>Riff</div>
      </Link>

      <div>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
        <div className="flex flex-row gap-2">
          <div>Hello, </div>
          <div>{user.user?.fullName}</div>
          <UserButton />
          </div>
        </SignedIn>
      </div>
    </nav>
  );
}
