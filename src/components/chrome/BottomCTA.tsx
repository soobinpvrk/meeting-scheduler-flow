import { cn } from "@/lib/utils";

type BottomCTAProps = {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  /** dark gradient fade above the button, used on scrollable screens */
  fade?: boolean;
};

export function BottomCTA({ label, onClick, disabled, fade }: BottomCTAProps) {
  return (
    <div className="w-full">
      {fade && (
        <div className="h-[32px] w-full bg-gradient-to-b from-transparent to-black" />
      )}
      <div className="flex h-[56px] items-start px-[20px]">
        <button
          type="button"
          onClick={onClick}
          disabled={disabled}
          className={cn(
            "flex h-[56px] w-full items-center justify-center rounded-c-full bg-white px-[24px] text-label-default transition-[transform,opacity] active:scale-[0.99]",
            "t-title1-strong focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
            disabled && "opacity-40",
          )}
        >
          {label}
        </button>
      </div>
      <div className="h-[34px] w-full" />
    </div>
  );
}
