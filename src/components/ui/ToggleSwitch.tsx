import * as Switch from "@radix-ui/react-switch";
import { cn } from "@/lib/utils";

type ToggleSwitchProps = {
  checked: boolean;
  onCheckedChange: (v: boolean) => void;
  label?: string;
};

export function ToggleSwitch({ checked, onCheckedChange, label }: ToggleSwitchProps) {
  return (
    <Switch.Root
      checked={checked}
      onCheckedChange={onCheckedChange}
      aria-label={label}
      className={cn(
        "relative h-[28px] w-[64px] shrink-0 rounded-[100px] outline-none transition-colors duration-200",
        "focus-visible:ring-2 focus-visible:ring-white/60",
        checked ? "bg-accent-green" : "bg-grey-800",
      )}
    >
      <Switch.Thumb
        className={cn(
          "absolute left-[2px] top-1/2 h-[24px] w-[38px] -translate-y-1/2 rounded-[100px] bg-white",
          "transition-transform duration-200 will-change-transform",
          "data-[state=checked]:translate-x-[22px]",
        )}
      />
    </Switch.Root>
  );
}
