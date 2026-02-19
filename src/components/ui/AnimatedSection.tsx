"use client";

import { useRef, ReactNode } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

/* ============================================
   AnimatedSection — Reusable scroll-triggered animation wrapper
   Wraps children in a Framer Motion container that fades/slides
   into view when scrolled into the viewport.
   ============================================ */

interface AnimatedSectionProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    direction?: "up" | "down" | "left" | "right";
    once?: boolean;
}

export default function AnimatedSection({
    children,
    className = "",
    delay = 0,
    direction = "up",
    once = true,
}: AnimatedSectionProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once, margin: "-80px" });
    const shouldReduceMotion = useReducedMotion();

    /* Direction-based initial offsets */
    const directionOffset = {
        up: { x: 0, y: 40 },
        down: { x: 0, y: -40 },
        left: { x: 40, y: 0 },
        right: { x: -40, y: 0 },
    };

    const offset = directionOffset[direction];

    return (
        <motion.div
            ref={ref}
            initial={
                shouldReduceMotion
                    ? { opacity: 1 }
                    : { opacity: 0, x: offset.x, y: offset.y }
            }
            animate={
                isInView
                    ? { opacity: 1, x: 0, y: 0 }
                    : shouldReduceMotion
                        ? { opacity: 1 }
                        : { opacity: 0, x: offset.x, y: offset.y }
            }
            transition={{
                duration: 0.6,
                delay,
                ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
