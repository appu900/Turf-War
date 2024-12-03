import Link from "next/link";
import React from "react";

export default function Notfound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-xl font-semibold">Not found 404</h1>
      <Link href="/">go back to homepage</Link>
    </div>
  );
}
