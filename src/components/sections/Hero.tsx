"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

/* ============================================
   Hero — Full viewport height hero section
   Left: heading, subline, CTAs
   Right: Portrait image placeholder
   Background: subtle dot grid pattern
   ============================================ */

export default function Hero() {
    const shouldReduceMotion = useReducedMotion();

    const fadeUp = (delay: number) =>
        shouldReduceMotion
            ? {}
            : {
                initial: { opacity: 0, y: 30 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
            };

    const slideIn = shouldReduceMotion
        ? {}
        : {
            initial: { opacity: 0, x: 60 },
            animate: { opacity: 1, x: 0 },
            transition: { duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
        };

    return (
        <section
            id="hero"
            className="relative flex min-h-screen items-center overflow-hidden"
        >
            {/* Dot grid background */}
            <div className="dot-grid-bg pointer-events-none absolute inset-0 opacity-40" />

            {/* Subtle gradient overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white via-white to-[#F0F4F8] opacity-80" />

            <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-32 lg:grid-cols-2 lg:gap-16 lg:px-8">
                {/* Left: Text content */}
                <div className="order-2 lg:order-1">
                    <motion.h1
                        {...fadeUp(0.1)}
                        className="font-[family-name:var(--font-playfair)] text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
                        style={{ color: "var(--color-text)" }}
                    >
                        Building healthcare
                        <br />
                        <span className="text-[var(--color-primary)]">
                            for a billion Indians.
                        </span>
                    </motion.h1>

                    <motion.p
                        {...fadeUp(0.25)}
                        className="mt-6 text-lg font-medium"
                        style={{ color: "var(--color-text-secondary)" }}
                    >
                        Co-Founder &amp; CEO, Tata 1mg &middot; IIT Delhi &middot; Stanford
                        GSB
                    </motion.p>

                    <motion.p
                        {...fadeUp(0.35)}
                        className="mt-4 max-w-lg text-base leading-relaxed"
                        style={{ color: "var(--color-text-secondary)" }}
                    >
                        On a mission to make quality healthcare transparent, accessible, and
                        affordable — one patient, one city, one innovation at a time.
                    </motion.p>

                    <motion.div
                        {...fadeUp(0.5)}
                        className="mt-8 flex flex-wrap items-center gap-4"
                    >
                        <a
                            href="#journey"
                            className="inline-flex items-center gap-2 rounded-full bg-[var(--color-dark)] px-7 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#2a2a4e] hover:shadow-lg"
                        >
                            Read My Story
                            <svg
                                className="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </a>
                        <a
                            href="#connect"
                            className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-7 py-3.5 text-sm font-semibold transition-all duration-200 hover:border-[var(--color-text-secondary)] hover:shadow-sm"
                            style={{ color: "var(--color-text)" }}
                        >
                            Connect with me
                        </a>
                    </motion.div>
                </div>

                {/* Right: Portrait image */}
                <motion.div
                    {...slideIn}
                    className="order-1 flex justify-center lg:order-2 lg:justify-end"
                >
                    <div className="relative">
                        {/* Decorative background shape */}
                        <div className="absolute -right-4 -top-4 h-full w-full rounded-2xl bg-gradient-to-br from-[#F8F9FA] to-[#E8EDF2]" />
                        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#F0F4F8] to-[#E2E8F0]">
                            {/* Replace with actual photo */}
                            <Image
                                src="/images/prashant.jpg"
                                alt="Prashant Tandon — Co-Founder & CEO, Tata 1mg"
                                width={480}
                                height={560}
                                className="h-auto w-[340px] object-cover sm:w-[400px] lg:w-[480px]"
                                priority
                            />
                        </div>
                        {/* Accent dot */}
                        <div className="absolute -bottom-3 -left-3 h-6 w-6 rounded-full bg-[var(--color-primary)] opacity-60" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
