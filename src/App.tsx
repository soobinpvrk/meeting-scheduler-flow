import { useState, useCallback } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Toaster } from "sonner";
import type { StepProps } from "@/flow";
import { ScheduleConditions } from "@/screens/ScheduleConditions";
import { OrganizerEmail } from "@/screens/OrganizerEmail";
import { AttendeeEmails } from "@/screens/AttendeeEmails";
import { ConfirmSchedule } from "@/screens/ConfirmSchedule";
import { ReactToCandidates } from "@/screens/ReactToCandidates";
import { Loading } from "@/screens/Loading";
import { Result } from "@/screens/Result";
import { CalendarAdded } from "@/screens/CalendarAdded";

const STEPS: ((p: StepProps) => JSX.Element)[] = [
  OrganizerEmail,
  ScheduleConditions,
  AttendeeEmails,
  ConfirmSchedule,
  Loading,
  ReactToCandidates,
  Result,
  CalendarAdded,
];

export default function App() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);
  const reduce = useReducedMotion();

  const goTo = useCallback((i: number) => {
    setDir(i >= 0 ? 1 : -1);
    setIndex(Math.max(0, Math.min(STEPS.length - 1, i)));
  }, []);

  const onNext = useCallback(() => {
    setDir(1);
    setIndex((i) => Math.min(STEPS.length - 1, i + 1));
  }, []);

  const onBack = useCallback(() => {
    setDir(-1);
    setIndex((i) => Math.max(0, i - 1));
  }, []);

  const Step = STEPS[index];

  return (
    <div className="min-h-[100dvh] bg-black">
      <AnimatePresence mode="wait" custom={dir} initial={false}>
        <motion.div
          key={index}
          custom={dir}
          initial={reduce ? { opacity: 0 } : { opacity: 0, x: dir * 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={reduce ? { opacity: 0 } : { opacity: 0, x: dir * -24 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="min-h-[100dvh]"
        >
          <Step onNext={onNext} onBack={onBack} goTo={goTo} />
        </motion.div>
      </AnimatePresence>

      <Pager count={STEPS.length} index={index} onGo={goTo} />

      <Toaster
        position="top-center"
        theme="dark"
        toastOptions={{
          style: {
            background: "rgba(30,34,42,0.9)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255,255,255,0.1)",
            color: "#fff",
          },
        }}
      />
    </div>
  );
}

function Pager({
  count,
  index,
  onGo,
}: {
  count: number;
  index: number;
  onGo: (i: number) => void;
}) {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-4 z-50 flex justify-center">
      <div className="pointer-events-auto flex items-center gap-1 rounded-full bg-black/50 px-2 py-1.5 ring-1 ring-white/10 backdrop-blur">
        <button
          type="button"
          aria-label="이전 화면"
          disabled={index === 0}
          onClick={() => onGo(index - 1)}
          className="flex size-8 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/10 disabled:opacity-30 disabled:hover:bg-transparent"
        >
          <ChevronLeft className="size-5" strokeWidth={2.2} />
        </button>
        <span className="min-w-[52px] text-center text-[13px] font-medium tabular-nums text-white/90">
          {index + 1} / {count}
        </span>
        <button
          type="button"
          aria-label="다음 화면"
          disabled={index === count - 1}
          onClick={() => onGo(index + 1)}
          className="flex size-8 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/10 disabled:opacity-30 disabled:hover:bg-transparent"
        >
          <ChevronRight className="size-5" strokeWidth={2.2} />
        </button>
      </div>
    </div>
  );
}
