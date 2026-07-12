import { useState } from "react";
import { Heart, Circle, X } from "lucide-react";
import { PhoneFrame } from "@/components/chrome/PhoneFrame";
import { ScreenTitle } from "@/components/ui/ScreenTitle";
import { candidates } from "@/data/meeting";
import { cn } from "@/lib/utils";
import type { StepProps } from "@/flow";

type Reaction = "like" | "maybe" | "hard";

const OPTIONS: { key: Reaction; label: string; Icon: typeof Heart }[] = [
  { key: "like", label: "좋아요", Icon: Heart },
  { key: "maybe", label: "가능해요", Icon: Circle },
  { key: "hard", label: "어려워요", Icon: X },
];

export function ReactToCandidates({ onNext, onBack }: StepProps) {
  // 후보 1 starts answered (좋아요), matching the Figma default state
  const [picked, setPicked] = useState<Record<number, Reaction>>({ 1: "like" });
  const allAnswered = candidates.every((c) => picked[c.index]);

  return (
    <PhoneFrame
      leading="back"
      onLeading={onBack}
      footer={
        <div className="w-full">
          <div className="h-[32px] w-full bg-gradient-to-b from-transparent to-black" />
          <p className="t-title3 px-[20px] pb-[20px] text-center text-[#ee404d]">
            3시간 53분 안에 완료해주세요
          </p>
          <div className="flex h-[56px] items-start px-[20px]">
            <button
              type="button"
              onClick={onNext}
              disabled={!allAnswered}
              className={cn(
                "t-title1-strong flex h-[56px] w-full items-center justify-center rounded-c-full bg-white px-[24px] text-label-default transition-[transform,opacity] active:scale-[0.99]",
                "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
                !allAnswered && "opacity-40",
              )}
            >
              완료
            </button>
          </div>
          <div className="h-[34px] w-full" />
        </div>
      }
    >
      <ScreenTitle
        title="모든 후보에 반응을 남겨주세요"
        subtitle="남긴 반응으로 가장 좋은 시간을 결정해요."
      />

      <div className="flex flex-col gap-[12px] pb-[24px] pt-[32px]">
        {candidates.map((c) => {
          const answered = Boolean(picked[c.index]);
          return (
            <div
              key={c.index}
              className={cn(
                "flex w-full flex-col items-center overflow-hidden rounded-box-xl opacity-90 backdrop-blur-[10px]",
                answered ? "bg-[rgba(250,250,249,0.05)]" : "bg-[rgba(250,250,249,0.10)]",
              )}
            >
              {/* text area */}
              <div className="flex w-full flex-col items-center gap-[8px] px-[24px] pb-[14px] pt-[18px] text-center">
                <span className="t-label2 rounded-c-full bg-grey-700 px-[9px] py-[3px] text-label-inverse">
                  후보 {c.index}
                </span>
                <p
                  className={cn(
                    "t-title1",
                    answered ? "text-label-muted" : "text-label-inverse",
                  )}
                >
                  {c.label}
                </p>
                <div
                  className={cn(
                    "t-label1-subtle",
                    answered ? "text-label-subtle" : "text-label-disabled",
                  )}
                >
                  {c.notes.map((n, i) => (
                    <p key={i}>{n}</p>
                  ))}
                </div>
              </div>

              {/* divider */}
              <div className="h-px w-[303px] bg-white/10" />

              {/* button area */}
              <div className="flex w-full items-center justify-between px-[18px] pb-[16px] pt-[14px]">
                {OPTIONS.map(({ key, label, Icon }) => {
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
                        on ? "bg-white text-label-strong" : "glass-strong text-label-inverse",
                      )}
                    >
                      <Icon className="size-4" strokeWidth={2} />
                      <span className="t-title3">{label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </PhoneFrame>
  );
}
