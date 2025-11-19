import React from "react";
import { type ButtonProps } from "@/interfaces";

const sizeClasses = {
  small: "px-2 py-1 text-sm",
  medium: "px-4 py-2 text-base",
  large: "px-6 py-3 text-lg",
};

export default function Button({ label, size, shape, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${sizeClasses[size]} ${shape} bg-blue-600 text-white`}
    >
      {label}
    </button>
  );
}
