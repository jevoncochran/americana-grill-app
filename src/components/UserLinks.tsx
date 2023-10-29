"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

// TODO: Rename this component to something more relevant (e.g. SessionDependentLinks or SessionLinks)
const UserLinks = () => {
  const { status } = useSession();

  return (
    <div>
      {status !== "authenticated" ? (
        <Link href="/login">Login</Link>
      ) : (
        <div>
          <Link href="/orders">Orders</Link>
          <span className="ml-4 cursor-pointer" onClick={() => signOut()}>
            Logout
          </span>
        </div>
      )}
    </div>
  );
};

export default UserLinks;
