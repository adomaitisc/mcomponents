"use client";

import { toast } from "sonner";
import { Button } from "../button/button";

export function ToastButton() {
  return (
    <Button onClick={() => toast.info("This is an info Toast")}>
      Click me!
    </Button>
  );
}
