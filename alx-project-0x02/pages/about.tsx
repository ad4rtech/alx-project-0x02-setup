import React from "react";
import Button from "@/components/common/Button";

export default function AboutPage() {
  return (
    <div style={{ padding: 20 }}>
      <h1>About Page</h1>

      <Button
        label="Small Button"
        size="small"
        shape="rounded-sm"
      />

      <br /><br />

      <Button
        label="Medium Button"
        size="medium"
        shape="rounded-md"
      />

      <br /><br />

      <Button
        label="Large Button"
        size="large"
        shape="rounded-full"
      />
    </div>
  );
}
