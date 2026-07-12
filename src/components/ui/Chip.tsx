import { cn } from "@/lib/utils";

type ChipProps = {
  label: string;
  selected?: boolean;
  onClick?: () => void;
};

export function Chip({ label, selected, onClick }: ChipProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={cn(
        "flex h-[38px] flex-1 items-center justify-center overflow-hidden rounded-c-md px-[12px] transition-colors",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60",
        selected
          ? "t-title3-strong border border-line-subtle bg-common-0 text-label-strong"
          : "t-title3 bg-grey-800 text-label-inverse",
      )}
    >
      <span className="whitespace-nowrap">{label}</span>
    </button>
  );
}
