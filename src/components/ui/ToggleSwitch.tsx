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
        "relative h-[28px] w-[64px] shrink-0 rounded-[100px] transition-colors duration-200 outline-none",
        "focus-visible:ring-2 focus-visible:ring-white/60",
        checked ? "bg-accent-green" : "bg-grey-800",
      )}
    >
      {/* Figma knob: 38x24 wide pill, 2px inset, slides horizontally */}
      <Switch.Thumb
        className={cn(
          "block h-[24px] w-[38px] rounded-[100px] bg-white transition-transform duration-200 will-change-transform",
          "translate-x-[2px] translate-y-[2px] data-[state=checked]:translate-x-[24px]",
        )}
      />
    </Switch.Root>
  );
}
