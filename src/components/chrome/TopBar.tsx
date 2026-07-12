import { ChevronLeft, X } from "lucide-react";

type TopBarProps = {
  /** "back" shows a chevron, "close" shows an X, "none" hides the leading icon */
  leading?: "back" | "close" | "none";
  onLeading?: () => void;
};

export function TopBar({ leading = "back", onLeading }: TopBarProps) {
  return (
    <div className="flex h-[52px] w-full items-center px-[8px] py-[4px]">
      <div className="flex h-[44px] w-[132px] items-center">
        {leading !== "none" && (
          <button
            type="button"
            onClick={onLeading}
            aria-label={leading === "back" ? "뒤로" : "닫기"}
            className="flex items-center justify-center rounded-c-lg p-[10px] text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/60"
          >
            {leading === "back" ? (
              <ChevronLeft className="size-6" strokeWidth={2.2} />
            ) : (
              <X className="size-6" strokeWidth={2.2} />
            )}
          </button>
        )}
      </div>
    </div>
  );
}
