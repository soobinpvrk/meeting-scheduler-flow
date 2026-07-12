import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type TextfieldProps = {
  value: string;
  onChange?: (v: string) => void;
  placeholder?: string;
  type?: string;
  trailing?: ReactNode;
  className?: string;
};

export function Textfield({
  value,
  onChange,
  placeholder,
  type = "text",
  trailing,
  className,
}: TextfieldProps) {
  return (
    <div
      className={cn(
        "glass flex h-[52px] w-full items-center gap-[8px] rounded-c-xl px-[16px]",
        className,
      )}
    >
      <input
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder={placeholder}
        type={type}
        className={cn(
          "t-title1-subtle min-w-0 flex-1 bg-transparent text-label-inverse outline-none",
          "placeholder:text-label-muted",
        )}
      />
      {trailing && <div className="flex shrink-0 items-center">{trailing}</div>}
    </div>
  );
}
