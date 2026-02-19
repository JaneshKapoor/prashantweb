"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

/* ============================================
   CountUp — Animated number counter component
   Counts from 0 to a target number when scrolled into view.
   Uses requestAnimationFrame for smooth animation.
   ============================================ */

interface CountUpProps {
    end: number;
    duration?: number;
    prefix?: string;
    suffix?: string;
    className?: string;
}

export default function CountUp({
    end,
    duration = 2000,
    prefix = "",
    suffix = "",
    className = "",
}: CountUpProps) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const shouldReduceMotion = useReducedMotion();
    const hasAnimated = useRef(false);

    useEffect(() => {
        if (!isInView || hasAnimated.current) return;
        hasAnimated.current = true;

        /* If user prefers reduced motion, show final number immediately */
        if (shouldReduceMotion) {
            setCount(end);
            return;
        }

        const startTime = performance.now();

        const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            /* Ease-out cubic for a decelerating feel */
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * end));

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                setCount(end);
            }
        };

        requestAnimationFrame(animate);
    }, [isInView, end, duration, shouldReduceMotion]);

    return (
        <span ref={ref} className={className}>
            {prefix}
            {count.toLocaleString("en-IN")}
            {suffix}
        </span>
    );
}
