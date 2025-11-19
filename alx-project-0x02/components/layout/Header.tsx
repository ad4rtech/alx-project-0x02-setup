import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <nav style={{ padding: "16px", display: "flex", gap: "20px" }}>
      <Link href="/home">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/posts">Posts</Link>
    </nav>
  );
}
