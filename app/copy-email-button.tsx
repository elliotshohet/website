"use client";

import { toast } from "sonner";
import { Icon } from "./ui-icon";
import type { ReactNode } from "react";

const email = "elliot.shohet@gmail.com";

export function CopyEmailButton({ className = "nav-contact copy-email", children = <><Icon name="mail" />Contact</> }: { className?: string; children?: ReactNode }) {
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      toast.success("Email copied to clipboard", { description: email, duration: 7000 });
    } catch {
      toast.error("Copy email address manually", { description: email, duration: 10000 });
    }
  }

  return <button type="button" className={className} onClick={copyEmail} aria-label="Copy Elliot’s email address" title="Copy email address to clipboard" data-track="email_click">{children}</button>;
}
