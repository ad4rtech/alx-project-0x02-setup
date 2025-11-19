import React from "react";
import { type PostProps } from "@/interfaces";

export default function PostCard({ userId, title, content }: PostProps) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "16px",
        marginBottom: "16px",
        borderRadius: "8px"
      }}
    >
      <h3>{title}</h3>
      <p>{content}</p>
      <small>User ID: {userId}</small>
    </div>
  );
}
