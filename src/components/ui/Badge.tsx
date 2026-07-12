import { cn } from "@/lib/utils";

type BadgeProps = {
  label: string;
  tone?: "host" | "optional";
};

export function Badge({ label, tone = "optional" }: BadgeProps) {
  return (
    <span
      className={cn(
        "t-caption2-strong inline-flex items-center justify-center rounded-c-full px-[5px] py-[2px] text-label-inverse",
        tone === "host" ? "bg-violet-300" : "bg-grey-600",
      )}
    >
      {label}
    </span>
  );
}
