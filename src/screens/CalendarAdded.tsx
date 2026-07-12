import { toast } from "sonner";
import { PhoneFrame } from "@/components/chrome/PhoneFrame";
import { GlassCard } from "@/components/ui/Card";
import { meeting, result } from "@/data/meeting";
import type { StepProps } from "@/flow";

export function CalendarAdded({ onBack }: StepProps) {
  return (
    <PhoneFrame leading="back" onLeading={onBack} center>
      <div className="flex w-full flex-col items-center gap-[28px]">
        <h1 className="t-heading1 whitespace-pre-line text-center text-label-inverse">
          {"참석자들에게\n확정된 시간을 알렸어요"}
        </h1>

        <GlassCard className="w-full p-[20px] text-left">
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
          className="t-body1 flex h-[48px] items-center justify-center rounded-c-full bg-white px-[20px] text-label-default transition-transform active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          캘린더에 추가하기
        </button>
      </div>
    </PhoneFrame>
  );
}
