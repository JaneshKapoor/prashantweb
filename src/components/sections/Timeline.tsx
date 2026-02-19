"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";

/* ============================================
   Timeline — Vertical alternating timeline
   Shows career journey from IIT Delhi to Tata 1mg.
   Alternates left/right on desktop, single column on mobile.
   ============================================ */

const timelineData = [
    {
        year: "2002",
        title: "IIT Delhi",
        description:
            "B.Tech in Chemical Engineering. Captain of the basketball team — learned to lead, compete, and bring a team together.",
    },
    {
        year: "2002–07",
        title: "Hindustan Unilever",
        description:
            "Business Leadership Program with pan-Asia roles in Innovation Development and Operations. Built a foundation in scale and execution.",
    },
    {
        year: "2007",
        title: "Stanford GSB",
        description:
            "MBA at Stanford University. Surrounded by founders and bold ideas — caught the entrepreneurship bug that would define the next chapter.",
    },
    {
        year: "2007–10",
        title: "McKinsey & Company",
        description:
            "Senior Associate in San Francisco, focused on US Healthcare consulting. Saw what a well-functioning health system could look like.",
    },
    {
        year: "2010",
        title: "Return to India",
        description:
            "Left the US with one conviction: India's healthcare was broken and opaque, and the internet could fix it.",
    },
    {
        year: "2011",
        title: "Co-Founded HealthKart",
        description:
            "With Sameer Maheshwari, built India's #1 nutrition e-commerce platform. Started with healthCHAKRA — software for doctors — before pivoting.",
    },
    {
        year: "2012–14",
        title: "The 90% Discovery",
        description:
            "Built HealthKart+, a medicine information app. Discovered that generic medicine prices varied by up to 90% across brands — a massive transparency problem.",
    },
    {
        year: "2015",
        title: "Founded 1mg",
        description:
            "Spun off HealthKart+ as an independent company. Co-founded 1mg with Gaurav Agarwal and Vikas Chauhan to bring price transparency and quality information to patients.",
    },
    {
        year: "2015–21",
        title: "India's Largest Digital Health Platform",
        description:
            "Grew 1mg into the country's leading online pharmacy, diagnostics, and e-consultation platform — backed by gold-standard medicine content.",
    },
    {
        year: "2021",
        title: "Tata 1mg Is Born",
        description:
            "Tata Digital acquires majority stake. 1mg becomes Tata 1mg. Achieves Unicorn status with $1.25B+ valuation.",
    },
    {
        year: "2021–Now",
        title: "Building the Health Stack",
        description:
            "Leading India's most complete omni-channel outpatient health platform — online + offline clinics, diagnostics, cold-chain delivery, and corporate healthcare across 1,000+ cities.",
    },
];

export default function Timeline() {
    return (
        <section id="journey" className="bg-[var(--color-bg-alt)] py-20 sm:py-28">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Section heading */}
                <AnimatedSection className="mb-16 text-center">
                    <p
                        className="text-sm font-semibold uppercase tracking-widest"
                        style={{ color: "var(--color-primary)" }}
                    >
                        Journey
                    </p>
                    <h2 className="mt-3 font-[family-name:var(--font-playfair)] text-3xl font-bold sm:text-4xl lg:text-5xl">
                        A life in motion
                    </h2>
                </AnimatedSection>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical line */}
                    <div className="timeline-line" />

                    <div className="space-y-12">
                        {timelineData.map((item, i) => {
                            const isLeft = i % 2 === 0;

                            return (
                                <AnimatedSection
                                    key={i}
                                    direction={isLeft ? "left" : "right"}
                                    delay={0.05}
                                >
                                    <div
                                        className={`relative flex items-start gap-6 md:gap-0 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"
                                            }`}
                                    >
                                        {/* Content card */}
                                        <div
                                            className={`ml-12 rounded-xl border border-[var(--color-border)] bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md md:ml-0 md:w-[calc(50%-2rem)] ${isLeft ? "md:mr-auto md:text-right" : "md:ml-auto md:text-left"
                                                }`}
                                        >
                                            <span
                                                className="inline-block rounded-full bg-[var(--color-bg-alt)] px-3 py-1 text-xs font-bold uppercase tracking-wider"
                                                style={{ color: "var(--color-primary)" }}
                                            >
                                                {item.year}
                                            </span>
                                            <h3 className="mt-3 text-lg font-bold" style={{ color: "var(--color-text)" }}>
                                                {item.title}
                                            </h3>
                                            <p
                                                className="mt-2 text-sm leading-relaxed"
                                                style={{ color: "var(--color-text-secondary)" }}
                                            >
                                                {item.description}
                                            </p>
                                        </div>

                                        {/* Timeline dot — centered on the line */}
                                        <div className="absolute left-[14px] top-6 z-10 flex h-4 w-4 items-center justify-center md:left-1/2 md:-translate-x-1/2">
                                            <div className="h-4 w-4 rounded-full border-[3px] border-[var(--color-primary)] bg-white" />
                                        </div>
                                    </div>
                                </AnimatedSection>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
