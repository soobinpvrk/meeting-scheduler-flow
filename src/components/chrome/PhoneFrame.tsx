import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { TopBar } from "./TopBar";
import { HomeIndicator } from "./HomeIndicator";

type PhoneFrameProps = {
  children: ReactNode;
  footer?: ReactNode;
  /** leading icon in the top bar: back chevron, close X, or none */
  leading?: "back" | "close" | "none";
  onLeading?: () => void;
  /** center content vertically (loading / completion screens) */
  center?: boolean;
  /** extra top-to-bottom overlay tint (result screen) */
  overlay?: boolean;
  className?: string;
};

export function PhoneFrame({
  children,
  footer,
  leading = "back",
  onLeading,
  center,
  overlay,
  className,
}: PhoneFrameProps) {
  return (
    <div className="flex min-h-full w-full items-center justify-center bg-black sm:p-6">
      <div
        className={cn(
          "relative flex h-[100dvh] w-full max-w-[375px] flex-col overflow-hidden bg-ambient text-white",
          "sm:h-[812px] sm:rounded-[44px] sm:shadow-[0_40px_120px_-20px_rgba(70,89,122,0.5)] sm:ring-1 sm:ring-white/10",
          className,
        )}
      >
        {overlay && (
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-0"
            style={{
              backgroundImage:
                "linear-gradient(180deg, rgba(0,0,0,0.2) 43.75%, rgba(70,89,122,0.2) 100%)",
            }}
          />
        )}

        {/* Top chrome: safe-area spacer (no iOS status bar) + top bar with back button */}
        <div className="relative z-20 shrink-0">
          <div className="h-[44px]" />
          <TopBar leading={leading} onLeading={onLeading} />
        </div>

        {/* Scrollable content */}
        <main
          className={cn(
            "relative z-10 min-h-0 flex-1 overflow-y-auto px-[20px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
            center && "flex flex-col items-center justify-center text-center",
          )}
        >
          {children}
        </main>

        {/* Bottom area */}
        <div className="relative z-20 shrink-0">
          {footer}
          <HomeIndicator />
        </div>
      </div>
    </div>
  );
}
