import { useEffect } from "react";
import { motion, useReducedMotion } from "motion/react";
import { PhoneFrame } from "@/components/chrome/PhoneFrame";
import type { StepProps } from "@/flow";

export function Loading({ onNext, onBack }: StepProps) {
  const reduce = useReducedMotion();

  useEffect(() => {
    const t = setTimeout(onNext, 2600);
    return () => clearTimeout(t);
  }, [onNext]);

  return (
    <PhoneFrame leading="back" onLeading={onBack} center>
      <div className="flex flex-col items-center gap-[40px]">
        <div className="relative flex size-[120px] items-center justify-center">
          {/* soft ambient halo */}
          <motion.div
            aria-hidden
            className="absolute size-[120px] rounded-full"
            style={{
              background:
                "radial-gradient(circle at 50% 40%, rgba(122,75,243,0.9), rgba(44,125,240,0.5) 55%, transparent 72%)",
              filter: "blur(6px)",
            }}
            animate={reduce ? undefined : { scale: [1, 1.12, 1], opacity: [0.85, 1, 0.85] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* rotating rim */}
          {!reduce && (
            <motion.div
              aria-hidden
              className="absolute size-[92px] rounded-full"
              style={{
                background:
                  "conic-gradient(from 0deg, rgba(255,255,255,0) 0deg, rgba(255,255,255,0.9) 300deg, rgba(255,255,255,0) 360deg)",
                WebkitMask: "radial-gradient(farthest-side, transparent calc(100% - 3px), #000 0)",
                mask: "radial-gradient(farthest-side, transparent calc(100% - 3px), #000 0)",
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "linear" }}
            />
          )}
        </div>

        <p className="t-heading1 text-label-inverse">괜찮은 시간을 잡아올게요</p>
      </div>
    </PhoneFrame>
  );
}
