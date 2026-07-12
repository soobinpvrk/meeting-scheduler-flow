import { useState, useCallback } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
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

      <StepDots count={STEPS.length} index={index} onDot={goTo} />

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

function StepDots({
  count,
  index,
  onDot,
}: {
  count: number;
  index: number;
  onDot: (i: number) => void;
}) {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-3 z-50 flex justify-center">
      <div className="pointer-events-auto flex gap-1.5 rounded-full bg-black/40 px-3 py-2 backdrop-blur">
        {Array.from({ length: count }).map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`${i + 1}단계로 이동`}
            aria-current={i === index}
            onClick={() => onDot(i)}
            className={
              "h-1.5 rounded-full transition-all " +
              (i === index ? "w-4 bg-white" : "w-1.5 bg-white/35 hover:bg-white/60")
            }
          />
        ))}
      </div>
    </div>
  );
}
