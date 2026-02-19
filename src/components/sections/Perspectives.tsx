"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";

/* ============================================
   Perspectives — Thought leadership & quotes
   Pull-quote cards + "Featured In" strip + blog teaser.
   ============================================ */

const quotes = [
    {
        text: "The idea that a patient should know what their medicine costs and why — that felt like a basic right we were taking for granted.",
        topic: "On Transparency",
    },
    {
        text: "We always kept our heads down and believed that if you are building real value, people will start seeing it. Competition is noise.",
        topic: "On Building",
    },
    {
        text: "India's healthcare transformation is one of the greatest opportunities of our generation — and the internet is finally making it real.",
        topic: "On India's Potential",
    },
];

const featuredIn = [
    "IAMAI",
    "FICCI",
    "Abu Dhabi Global Health Week",
    "YourStory",
    "The CapTable",
];

export default function Perspectives() {
    return (
        <section id="perspectives" className="bg-[var(--color-bg-alt)] py-20 sm:py-28">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Section heading */}
                <AnimatedSection className="mb-16 text-center">
                    <p
                        className="text-sm font-semibold uppercase tracking-widest"
                        style={{ color: "var(--color-primary)" }}
                    >
                        Perspectives
                    </p>
                    <h2 className="mt-3 font-[family-name:var(--font-playfair)] text-3xl font-bold sm:text-4xl lg:text-5xl">
                        On Healthcare, Entrepreneurship
                        <br className="hidden sm:block" />
                        &amp; India
                    </h2>
                </AnimatedSection>

                {/* Quote cards */}
                <div className="space-y-8">
                    {quotes.map((quote, i) => (
                        <AnimatedSection key={i} delay={i * 0.1}>
                            <blockquote className="rounded-xl bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-md sm:p-10">
                                <div className="flex items-start gap-6">
                                    {/* Left border accent */}
                                    <div className="hidden w-1 shrink-0 self-stretch rounded-full bg-[var(--color-primary)] sm:block" />
                                    <div>
                                        <p
                                            className="text-xs font-bold uppercase tracking-widest"
                                            style={{ color: "var(--color-primary)" }}
                                        >
                                            {quote.topic}
                                        </p>
                                        <p className="mt-4 font-[family-name:var(--font-playfair)] text-lg italic leading-relaxed sm:text-xl lg:text-2xl" style={{ color: "var(--color-text)" }}>
                                            &ldquo;{quote.text}&rdquo;
                                        </p>
                                    </div>
                                </div>
                            </blockquote>
                        </AnimatedSection>
                    ))}
                </div>

                {/* Featured In / Speaking At strip */}
                <AnimatedSection className="mt-16">
                    <div className="text-center">
                        <p
                            className="text-xs font-bold uppercase tracking-widest"
                            style={{ color: "var(--color-text-muted)" }}
                        >
                            Featured In &amp; Speaking At
                        </p>
                        <div className="mt-6 flex flex-wrap items-center justify-center gap-6 sm:gap-10">
                            {featuredIn.map((org) => (
                                <span
                                    key={org}
                                    className="text-sm font-semibold tracking-wide sm:text-base"
                                    style={{ color: "var(--color-text-secondary)" }}
                                >
                                    {org}
                                </span>
                            ))}
                        </div>
                    </div>
                </AnimatedSection>

                {/* Blog teaser */}
                <AnimatedSection className="mt-12 text-center">
                    <a
                        href="/blog"
                        className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:text-[var(--color-primary)]"
                        style={{ color: "var(--color-accent-teal)" }}
                    >
                        More perspectives coming soon
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
                                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                            />
                        </svg>
                    </a>
                </AnimatedSection>
            </div>
        </section>
    );
}
