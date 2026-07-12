import { useState } from "react";
import { Star, X } from "lucide-react";
import { PhoneFrame } from "@/components/chrome/PhoneFrame";
import { BottomCTA } from "@/components/chrome/BottomCTA";
import { ScreenTitle } from "@/components/ui/ScreenTitle";
import { Textfield } from "@/components/ui/Textfield";
import type { StepProps } from "@/flow";

type Row = { email: string; required: boolean };

export function AttendeeEmails({ onNext, onBack }: StepProps) {
  const [draft, setDraft] = useState("");
  const [rows, setRows] = useState<Row[]>([
    { email: "gayoung@toss.im", required: true },
    { email: "jieun.yoon@toss.im", required: true },
    { email: "minsu.kim@toss.im", required: false },
  ]);

  const add = () => {
    const value = draft.trim();
    if (!value) return;
    setRows((r) => [...r, { email: value, required: true }]);
    setDraft("");
  };

  const toggle = (i: number) =>
    setRows((r) => r.map((row, idx) => (idx === i ? { ...row, required: !row.required } : row)));
  const remove = (i: number) => setRows((r) => r.filter((_, idx) => idx !== i));

  return (
    <PhoneFrame
      leading="back"
      onLeading={onBack}
      footer={<BottomCTA label="다음" onClick={onNext} disabled={rows.length === 0} />}
    >
      <ScreenTitle
        title="참석자의 이메일을 적어주세요"
        subtitle={"시간 후보와 일정 확정을 공유할 이메일이에요.\n선택 참석자는 별 표시를 해제해주세요."}
      />

      <div className="flex flex-col gap-[12px] pt-[32px]">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            add();
          }}
        >
          <Textfield
            value={draft}
            onChange={setDraft}
            placeholder="이메일 입력 후 Enter"
            type="email"
          />
        </form>

        <div className="flex flex-col gap-[8px]">
          {rows.map((row, i) => (
            <div key={i} className="glass flex h-[52px] items-center gap-[8px] rounded-c-xl pl-[16px] pr-[8px]">
              <span className="t-title1-subtle min-w-0 flex-1 truncate text-label-inverse">
                {row.email}
              </span>
              <button
                type="button"
                onClick={() => toggle(i)}
                aria-label={row.required ? "필수 참석자 (별표 해제하기)" : "선택 참석자 (별표 하기)"}
                aria-pressed={row.required}
                className="flex size-9 items-center justify-center rounded-c-lg transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/60"
              >
                <Star
                  className="size-[22px]"
                  strokeWidth={2}
                  fill={row.required ? "#a87ef3" : "none"}
                  stroke={row.required ? "#a87ef3" : "#8c959e"}
                />
              </button>
              <button
                type="button"
                onClick={() => remove(i)}
                aria-label={`${row.email} 삭제`}
                className="flex size-9 items-center justify-center rounded-c-lg text-label-muted transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/60"
              >
                <X className="size-[22px]" strokeWidth={2} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </PhoneFrame>
  );
}
