"use client";

import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";

/* ============================================
   About — "The person behind the platform"
   Two-column layout with prose narrative and image.
   ============================================ */

export default function About() {
    return (
        <section id="about" className="py-20 sm:py-28">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
                    {/* Left: Image */}
                    <AnimatedSection direction="left">
                        <div className="relative">
                            <div className="absolute -left-4 -top-4 h-full w-full rounded-2xl bg-gradient-to-br from-[#F0F4F8] to-[#E2E8F0]" />
                            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#F8F9FA] to-[#EDF2F7]">
                                {/* Replace with actual second photo */}
                                <Image
                                    src="/images/prashant-2.jpg"
                                    alt="Prashant Tandon"
                                    width={560}
                                    height={640}
                                    className="h-auto w-full object-cover"
                                />
                            </div>
                            {/* Accent element */}
                            <div className="absolute -bottom-2 -right-2 h-5 w-5 rounded-full bg-[var(--color-primary)] opacity-50" />
                        </div>
                    </AnimatedSection>

                    {/* Right: Text content */}
                    <AnimatedSection direction="right" delay={0.15}>
                        <div>
                            <p
                                className="text-sm font-semibold uppercase tracking-widest"
                                style={{ color: "var(--color-primary)" }}
                            >
                                About
                            </p>
                            <h2 className="mt-3 font-[family-name:var(--font-playfair)] text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                                The person behind
                                <br />
                                the platform
                            </h2>

                            <div className="mt-8 space-y-5 text-base leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                                <p>
                                    Before Prashant Tandon became the face of India&rsquo;s largest
                                    digital health platform, he was the captain of the basketball
                                    team at IIT Delhi — competitive, team-oriented, and quietly
                                    driven. A Chemical Engineering degree gave him rigor;
                                    Stanford&rsquo;s GSB gave him the spark of entrepreneurship.
                                </p>
                                <p>
                                    Between those two worlds came formative stints: Hindustan
                                    Unilever&rsquo;s leadership program across Asia, then
                                    McKinsey&rsquo;s healthcare practice in San Francisco — where he
                                    saw, firsthand, what a well-functioning health system could look
                                    like. In 2010, he returned to India with one clear conviction:
                                    the country&rsquo;s healthcare needed reinvention, from the
                                    ground up.
                                </p>
                                <p>
                                    He co-founded HealthKart in 2011 — initially building software
                                    for doctors — and grew it into India&rsquo;s leading nutrition
                                    e-commerce platform. But it was a discovery inside HealthKart
                                    that changed everything: a mobile app revealing that the same
                                    generic medicine salt could vary in price by up to 90% across
                                    brands. The opacity was staggering. That insight became a
                                    company — spun off and rebranded as{" "}
                                    <strong>1mg</strong> in 2015 — and eventually, after Tata
                                    Digital&rsquo;s acquisition in 2021, it became{" "}
                                    <strong>Tata 1mg</strong>, valued at over $1.25 billion.
                                </p>
                                <p>
                                    Today, Prashant leads a platform that delivers medicines,
                                    diagnostics, and consultations to over 1,000 cities. But ask
                                    him, and he&rsquo;ll tell you: the mission hasn&rsquo;t
                                    changed. It&rsquo;s still about making sure every Indian
                                    knows what their medicine costs, why — and that they can access
                                    quality care regardless of where they live.
                                </p>
                            </div>

                            {/* Pull quote */}
                            <blockquote className="pull-quote mt-10 text-xl font-medium leading-relaxed sm:text-2xl" style={{ color: "var(--color-text)" }}>
                                &ldquo;If you are building value, people will eventually see
                                it.&rdquo;
                            </blockquote>
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
}
