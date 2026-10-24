"use client";

import { useEffect, useRef, useSyncExternalStore, type ReactNode } from "react";
import { useInView, useReducedMotion } from "motion/react";
import BlurText from "@/components/react-bits/BlurText";
import SpotlightCard from "@/components/react-bits/SpotlightCard";
import Magnet from "@/components/react-bits/Magnet";
import { cn } from "@/lib/utils";

const subscribe = () => () => {};
const client = () => true;
const server = () => false;

/** Keep the server-rendered heading readable even when JavaScript is unavailable. */
export function AnimatedHeading({ children, className }: { children: string; className?: string }) {
  const hydrated = useSyncExternalStore(subscribe, client, server);
  const reduced = useReducedMotion();
  if (!hydrated || reduced) return <span className={className}>{children}</span>;
  return (
    <BlurText
      text={children}
      className={className}
      animateBy="letters"
      direction="bottom"
      delay={23}
      stepDuration={0.3}
      animationFrom={{ filter: "blur(8px)", opacity: 0.45, y: 28 }}
      animationTo={[
        { filter: "blur(3px)", opacity: 0.8, y: -2 },
        { filter: "blur(0px)", opacity: 1, y: 0 },
      ]}
    />
  );
}

/** Animate once on entry; static HTML never starts hidden. */
export function Reveal({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const entered = useInView(ref, { once: true, amount: 0.12 });
  const reduced = useReducedMotion();
  useEffect(() => {
    if (!entered || reduced || !ref.current) return;
    const animation = ref.current.animate(
      [{ opacity: 0.4, transform: "translateY(30px)" }, { opacity: 1, transform: "translateY(0)" }],
      { duration: 650, delay: Math.min(delay, 0.4) * 1000, easing: "cubic-bezier(.2,.7,.2,1)", fill: "backwards" },
    );
    return () => animation.cancel();
  }, [entered, reduced, delay]);
  return <div ref={ref} className={cn("motion-reveal", className)}>{children}</div>;
}

export function InteractiveCard({ children, className, effect = "spotlight" }: { children: ReactNode; className?: string; effect?: "spotlight" | "lift" }) {
  const reduced = useReducedMotion();
  if (effect === "lift") return <div className={cn("interactive-card experience-motion", className)}>{children}</div>;
  return (
    <SpotlightCard
      className={cn("interactive-card", className)}
      spotlightColor="var(--accent)"
      spotlightSize={360}
      intensity={reduced ? 0 : 0.13}
      borderGlow={reduced ? 0 : 0.3}
      proximity={0}
      ambient={false}
      flare={false}
      grain={0}
      style={{
        "--spotlight-card-surface": "var(--surface)",
        "--spotlight-card-border": "var(--line)",
        "--spotlight-card-shadow": "none",
      } as React.CSSProperties}
    >
      {children}
    </SpotlightCard>
  );
}

const subscribePointer = (notify: () => void) => {
  const media = window.matchMedia("(pointer: coarse)");
  media.addEventListener("change", notify);
  return () => media.removeEventListener("change", notify);
};
const coarsePointer = () => window.matchMedia("(pointer: coarse)").matches;
const coarseServer = () => true;

/** React Bits' shared pointer-field interaction, disabled on touch and reduced motion. */
export function Magnetic({ children, className }: { children: ReactNode; className?: string }) {
  const coarse = useSyncExternalStore(subscribePointer, coarsePointer, coarseServer);
  const reduced = useReducedMotion();
  return (
    <Magnet
      disabled={coarse || Boolean(reduced)}
      padding={70}
      magnetStrength={8}
      maxOffset={12}
      tilt={3}
      scale={1.015}
      wrapperClassName={cn("magnetic", className)}
      innerClassName="magnetic-inner"
    >
      {children}
    </Magnet>
  );
}
