import { useState } from "react";
import { PhoneFrame } from "@/components/chrome/PhoneFrame";
import { BottomCTA } from "@/components/chrome/BottomCTA";
import { ScreenTitle } from "@/components/ui/ScreenTitle";
import { Textfield } from "@/components/ui/Textfield";
import type { StepProps } from "@/flow";

export function OrganizerEmail({ onNext, onBack }: StepProps) {
  const [email, setEmail] = useState("");

  return (
    <PhoneFrame
      leading="close"
      onLeading={onBack}
      footer={<BottomCTA label="다음" onClick={onNext} disabled={email.length === 0} />}
    >
      <ScreenTitle
        title="본인의 이메일을 적어주세요"
        subtitle={"주최자로 표시될 이메일이에요.\n주최자에게도 괜찮은 시간 후보를 추천해요."}
      />
      <div className="pt-[32px]">
        <Textfield
          value={email}
          onChange={setEmail}
          placeholder="이메일"
          type="email"
        />
      </div>
    </PhoneFrame>
  );
}
