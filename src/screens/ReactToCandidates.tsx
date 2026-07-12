import { useState } from "react";
import { Heart, Circle, X } from "lucide-react";
import { PhoneFrame } from "@/components/chrome/PhoneFrame";
import { BottomCTA } from "@/components/chrome/BottomCTA";
import { ScreenTitle } from "@/components/ui/ScreenTitle";
import { GlassCard } from "@/components/ui/Card";
import { candidates } from "@/data/meeting";
import { cn } from "@/lib/utils";
import type { StepProps } from "@/flow";

type Reaction = "like" | "maybe" | "hard";

const OPTIONS: { key: Reaction; label: string; Icon: typeof Heart; active: string }[] = [
  { key: "like", label: "좋아요", Icon: Heart, active: "bg-accent-green text-white" },
  { key: "maybe", label: "가능해요", Icon: Circle, active: "bg-violet-300 text-white" },
  { key: "hard", label: "어려워요", Icon: X, active: "bg-grey-600 text-white" },
];

export function ReactToCandidates({ onNext, onBack }: StepProps) {
  const [picked, setPicked] = useState<Record<number, Reaction>>({ 1: "like" });
  const allAnswered = candidates.every((c) => picked[c.index]);

  return (
    <PhoneFrame
      leading="back"
      onLeading={onBack}
      footer={<BottomCTA label="반응 남기기" onClick={onNext} disabled={!allAnswered} fade />}
    >
      <ScreenTitle
        title="모든 후보에 반응을 남겨주세요"
        subtitle="남긴 반응으로 가장 좋은 시간을 결정해요."
      />

      <div className="flex flex-col gap-[16px] pb-[24px] pt-[32px]">
        {candidates.map((c) => (
          <GlassCard key={c.index} className="p-[20px]">
            <p className="t-label2 mb-[8px] inline-flex rounded-c-full bg-grey-700 px-[9px] py-[3px] text-label-inverse">
              후보 {c.index}
            </p>
            <p className="t-title1-strong mt-[4px] text-label-inverse">{c.date}</p>
            <p className="t-body1 mb-[16px] text-label-disabled">{c.time}</p>

            <div className="flex items-center justify-between">
              {OPTIONS.map(({ key, label, Icon, active }) => {
                const on = picked[c.index] === key;
                return (
                  <button
                    key={key}
                    type="button"
                    aria-pressed={on}
                    onClick={() => setPicked((p) => ({ ...p, [c.index]: key }))}
                    className={cn(
                      "flex items-center gap-[4px] rounded-c-full py-[8px] pl-[12px] pr-[14px] transition-colors",
                      "focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/60",
                      on ? active : "glass-strong text-label-inverse",
                    )}
                  >
                    <Icon className="size-4" strokeWidth={2} fill={on ? "currentColor" : "none"} />
                    <span className="t-title3">{label}</span>
                  </button>
                );
              })}
            </div>
          </GlassCard>
        ))}
      </div>
    </PhoneFrame>
  );
}
