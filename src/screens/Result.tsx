import { Heart, Circle, X } from "lucide-react";
import { PhoneFrame } from "@/components/chrome/PhoneFrame";
import { BottomCTA } from "@/components/chrome/BottomCTA";
import { ScreenTitle } from "@/components/ui/ScreenTitle";
import { GlassCard, GlowCard } from "@/components/ui/Card";
import { candidates, result } from "@/data/meeting";
import type { StepProps } from "@/flow";

const top = candidates[0];

export function Result({ onNext, onBack }: StepProps) {
  return (
    <PhoneFrame
      leading="back"
      onLeading={onBack}
      overlay
      footer={<BottomCTA label="확정하고 알리기" onClick={onNext} />}
    >
      <ScreenTitle
        align="center"
        overline="결정 완료!"
        title={"이 시간이 일정 잡기\n가장 좋은 시간이에요"}
      />

      <div className="flex flex-col gap-[20px] pb-[24px] pt-[40px]">
        <div className="flex items-center justify-between">
          <CountPill Icon={Heart} label="좋아요" count={top.likes} />
          <CountPill Icon={Circle} label="가능해요" count={top.maybe} />
          <CountPill Icon={X} label="어려워요" count={top.hard} />
        </div>

        <GlassCard className="flex h-[82px] items-center justify-center px-[20px] text-center">
          <p className="t-label1-subtle whitespace-pre-line text-label-disabled">
            {result.reason}
          </p>
        </GlassCard>

        <GlowCard className="min-h-[144px]">
          <div className="flex flex-col items-center gap-[10px] px-[20px] pb-[20px] pt-[20px]">
            <span className="t-label2 rounded-c-full bg-grey-700 px-[9px] py-[3px] text-label-inverse">
              후보 {result.index}
            </span>
            <p className="t-heading1 text-center text-label-inverse">
              {result.date}
              <br />
              {result.time}
            </p>
          </div>
        </GlowCard>
      </div>
    </PhoneFrame>
  );
}

function CountPill({
  Icon,
  label,
  count,
}: {
  Icon: typeof Heart;
  label: string;
  count: number;
}) {
  return (
    <div className="glass-strong flex items-center gap-[4px] rounded-c-full py-[8px] pl-[12px] pr-[14px] text-label-inverse">
      <Icon className="size-4" strokeWidth={2} />
      <span className="t-title3">
        {label} {count}
      </span>
    </div>
  );
}
