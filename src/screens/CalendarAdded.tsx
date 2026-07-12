import { CalendarPlus } from "lucide-react";
import { toast } from "sonner";
import { PhoneFrame } from "@/components/chrome/PhoneFrame";
import { BottomCTA } from "@/components/chrome/BottomCTA";
import { ScreenTitle } from "@/components/ui/ScreenTitle";
import { GlassCard } from "@/components/ui/Card";
import { meeting, result } from "@/data/meeting";
import type { StepProps } from "@/flow";

export function CalendarAdded({ goTo, onBack }: StepProps) {
  return (
    <PhoneFrame
      leading="back"
      onLeading={onBack}
      footer={<BottomCTA label="처음으로" onClick={() => goTo(0)} />}
    >
      <div className="pt-[80px]">
        <ScreenTitle title={"참석자들에게\n확정된 시간을 알렸어요"} />
      </div>

      <div className="pt-[24px]">
        <GlassCard className="p-[20px]">
          <p className="t-title1 mb-[8px] text-label-inverse">{meeting.title}</p>
          <div className="flex flex-col gap-[2px]">
            <p className="t-label1-subtle text-label-disabled">
              {result.date} {result.time}
            </p>
            <p className="t-label1-subtle text-label-disabled">{result.room}</p>
            <p className="t-label1-subtle text-label-disabled">{result.attendeeSummary}</p>
          </div>
        </GlassCard>

        <button
          type="button"
          onClick={() => toast.success("내 캘린더에 일정을 추가했어요")}
          className="glass-strong mx-auto mt-[24px] flex h-[56px] items-center justify-center gap-[6px] rounded-c-full px-[24px] text-label-inverse transition-colors hover:bg-white/[0.16] focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/60"
        >
          <CalendarPlus className="size-5" strokeWidth={2} />
          <span className="t-title1-strong">캘린더에 추가</span>
        </button>
      </div>
    </PhoneFrame>
  );
}
