import React from "react";
import { type UserProps } from "@/interfaces";

export default function UserCard({ name, email, address }: UserProps) {
  return (
    <div
      style={{
        padding: "16px",
        marginBottom: "12px",
        border: "1px solid #ddd",
        borderRadius: "8px",
      }}
    >
      <h2>{name}</h2>
      <p>Email: {email}</p>
      <p>
        Address: {address.street}, {address.city}
      </p>
    </div>
  );
}
