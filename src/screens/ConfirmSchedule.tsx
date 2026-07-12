import type { ReactNode } from "react";
import { Check } from "lucide-react";
import { PhoneFrame } from "@/components/chrome/PhoneFrame";
import { BottomCTA } from "@/components/chrome/BottomCTA";
import { ScreenTitle } from "@/components/ui/ScreenTitle";
import { GlowCard, GlassCard } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { attendees, meeting } from "@/data/meeting";
import type { StepProps } from "@/flow";

function CheckLine({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-[4px]">
      <Check className="size-3 shrink-0 text-label-disabled" strokeWidth={3} />
      <span className="t-label1-subtle text-label-disabled">{children}</span>
    </div>
  );
}

export function ConfirmSchedule({ onNext, onBack }: StepProps) {
  return (
    <PhoneFrame
      leading="back"
      onLeading={onBack}
      footer={<BottomCTA label="시간 추천받기" onClick={onNext} fade />}
    >
      <ScreenTitle title="잡아야 할 일정을 확인할게요" />

      <div className="flex flex-col gap-[16px] pb-[24px] pt-[32px]">
        <GlowCard>
          <div className="flex flex-col gap-[8px] p-[20px]">
            <p className="t-title1 text-label-inverse">{meeting.title}</p>
            <div className="flex flex-col gap-[4px]">
              <CheckLine>{meeting.duration}</CheckLine>
              <CheckLine>
                {meeting.periodFrom} ~ {meeting.periodTo} 사이 진행 희망
              </CheckLine>
              {meeting.needsRoom && <CheckLine>회의실 필요</CheckLine>}
            </div>
          </div>
        </GlowCard>

        <GlassCard className="p-[20px]">
          <p className="t-title1 mb-[8px] text-label-inverse">참석자</p>
          <div className="flex flex-col gap-[4px]">
            {attendees.map((a) => (
              <div key={a.email} className="flex items-center gap-[4px]">
                <span className="t-label1-subtle text-label-disabled">
                  {a.name} ({a.email})
                </span>
                {a.role === "host" && <Badge label="주최자" tone="host" />}
                {a.role === "optional" && <Badge label="선택" tone="optional" />}
              </div>
            ))}
          </div>
        </GlassCard>

        <GlassCard className="p-[20px]">
          <p className="t-title1 mb-[8px] text-label-inverse">일정 확정 마감 기한</p>
          <span className="t-label1-subtle text-label-disabled">{meeting.deadline}</span>
        </GlassCard>
      </div>
    </PhoneFrame>
  );
}
