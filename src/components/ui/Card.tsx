import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Plain frosted-glass surface (info panels). */
export function GlassCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("glass rounded-box-lg opacity-90", className)}>{children}</div>
  );
}

/**
 * Signature ambient-glow card: frosted glass with an inset violet→blue glow.
 * Used for the highlighted meeting / candidate cards.
 */
export function GlowCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("relative overflow-hidden rounded-box-lg", className)}>
      <div aria-hidden className="glass absolute inset-0 rounded-box-lg" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-box-lg shadow-glow"
      />
      <div className="relative">{children}</div>
    </div>
  );
}
