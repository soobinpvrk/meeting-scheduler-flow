import { useState } from "react";
import { CircleDashed } from "lucide-react";
import { PhoneFrame } from "@/components/chrome/PhoneFrame";
import { BottomCTA } from "@/components/chrome/BottomCTA";
import { ScreenTitle } from "@/components/ui/ScreenTitle";
import { Textfield } from "@/components/ui/Textfield";
import { Chip } from "@/components/ui/Chip";
import { ToggleSwitch } from "@/components/ui/ToggleSwitch";
import type { StepProps } from "@/flow";

const DURATIONS = ["30분", "1시간", "2시간", "3시간"];
const DEADLINES = ["오늘", "내일", "모레", "이번 평일"];

function FieldLabel({ children }: { children: string }) {
  return <p className="t-title2 text-label-inverse">{children}</p>;
}

export function ScheduleConditions({ onNext, onBack }: StepProps) {
  const [name, setName] = useState("");
  const [duration, setDuration] = useState(1);
  const [needsRoom, setNeedsRoom] = useState(true);
  const [deadline, setDeadline] = useState(1);

  return (
    <PhoneFrame
      leading="back"
      onLeading={onBack}
      footer={<BottomCTA label="다음" onClick={onNext} />}
    >
      <ScreenTitle title="어떤 일정인가요?" />

      <div className="flex flex-col gap-[32px] pb-[24px] pt-[32px]">
        <Textfield value={name} onChange={setName} placeholder="일정 이름" />

        <section className="flex flex-col gap-[8px]">
          <FieldLabel>소요 시간</FieldLabel>
          <div className="flex gap-[8px]">
            {DURATIONS.map((d, i) => (
              <Chip key={d} label={d} selected={duration === i} onClick={() => setDuration(i)} />
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-[8px]">
          <FieldLabel>필요 조건</FieldLabel>
          <div className="glass flex items-center rounded-c-xl px-[16px] py-[14px]">
            <p className="t-body1 flex-1 text-label-inverse">회의실이 필요해요</p>
            <ToggleSwitch
              checked={needsRoom}
              onCheckedChange={setNeedsRoom}
              label="회의실 필요"
            />
          </div>
        </section>

        <section className="flex flex-col gap-[8px]">
          <FieldLabel>진행 희망 기간</FieldLabel>
          <div className="glass overflow-hidden rounded-c-2xl">
            <DateRow icon label="시작" date="2026. 7. 6" time="오전 10:00" />
            <div className="mx-[16px] h-px bg-white/10" />
            <DateRow label="종료" date="2026. 7. 10" time="오후 2:00" />
          </div>
        </section>

        <section className="flex flex-col gap-[8px]">
          <FieldLabel>마감 기한</FieldLabel>
          <div className="flex gap-[8px]">
            {DEADLINES.map((d, i) => (
              <Chip key={d} label={d} selected={deadline === i} onClick={() => setDeadline(i)} />
            ))}
          </div>
        </section>
      </div>
    </PhoneFrame>
  );
}

function DateRow({
  label,
  date,
  time,
}: {
  icon?: boolean;
  label: string;
  date: string;
  time: string;
}) {
  return (
    <button
      type="button"
      className="flex w-full items-center gap-[8px] py-[14px] pl-[8px] pr-[16px] text-left"
    >
      <CircleDashed className="size-6 shrink-0 text-label-muted" strokeWidth={1.6} />
      <span className="t-body1 flex-1 text-label-muted">{label}</span>
      <span className="t-body1 flex items-center gap-[8px] text-label-inverse">
        <span>{date}</span>
        <span>{time}</span>
      </span>
    </button>
  );
}
