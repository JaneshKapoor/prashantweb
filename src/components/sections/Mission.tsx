"use client";

import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";

/* ============================================
   Mission — "Making healthcare accessible to every Indian"
   Three-pillar card grid + Tata partnership context.
   ============================================ */

const pillars = [
    {
        icon: (
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
        ),
        title: "Information",
        description:
            "Transparent, accurate medicine information for every patient. Because knowing what you're taking — and what it costs — is a fundamental right, not a privilege.",
    },
    {
        icon: (
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
        ),
        title: "Access",
        description:
            "Medicines, diagnostics, and consultations delivered to over 1,000 cities across India — from metros to tier-3 towns. Healthcare that goes where the patients are.",
    },
    {
        icon: (
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
            </svg>
        ),
        title: "Affordability",
        description:
            "Quality care at prices every Indian can afford. Built on the discovery that generic medicine prices could vary by up to 90% — a problem that demanded a solution.",
    },
];

export default function Mission() {
    return (
        <section id="mission" className="py-20 sm:py-28">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Section heading */}
                <AnimatedSection className="mb-16 text-center">
                    <p
                        className="text-sm font-semibold uppercase tracking-widest"
                        style={{ color: "var(--color-primary)" }}
                    >
                        Tata 1mg
                    </p>
                    <h2 className="mt-3 font-[family-name:var(--font-playfair)] text-3xl font-bold sm:text-4xl lg:text-5xl">
                        Making healthcare accessible
                        <br className="hidden sm:block" />
                        to every Indian
                    </h2>
                </AnimatedSection>

                {/* Three pillars */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {pillars.map((pillar, i) => (
                        <AnimatedSection key={i} delay={i * 0.1}>
                            <div className="group rounded-2xl border border-[var(--color-border)] bg-white p-8 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                                <div
                                    className="flex h-14 w-14 items-center justify-center rounded-xl bg-[var(--color-bg-alt)]"
                                    style={{ color: "var(--color-primary)" }}
                                >
                                    {pillar.icon}
                                </div>
                                <h3
                                    className="mt-6 text-xl font-bold"
                                    style={{ color: "var(--color-text)" }}
                                >
                                    {pillar.title}
                                </h3>
                                <p
                                    className="mt-3 text-sm leading-relaxed"
                                    style={{ color: "var(--color-text-secondary)" }}
                                >
                                    {pillar.description}
                                </p>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>

                {/* Tata partnership context */}
                <AnimatedSection className="mt-16" delay={0.2}>
                    <div className="rounded-2xl bg-[var(--color-bg-alt)] p-8 sm:p-12">
                        <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-8 lg:grid-cols-5">
                            <div className="lg:col-span-3">
                                <p
                                    className="text-base leading-relaxed"
                                    style={{ color: "var(--color-text-secondary)" }}
                                >
                                    In 2021, the <strong className="text-[var(--color-text)]">Tata Group</strong> —
                                    India&rsquo;s most trusted conglomerate — acquired a majority stake in
                                    1mg. The partnership brought more than capital: it added
                                    the trust and institutional depth of the Tata name to
                                    1mg&rsquo;s technology-first approach to healthcare. Today, Tata 1mg
                                    operates India&rsquo;s most complete digital health platform —
                                    from online pharmacy and diagnostics to corporate health
                                    solutions and an expanding offline clinic network.
                                </p>
                                <a
                                    href="https://www.1mg.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:text-[var(--color-primary)]"
                                    style={{ color: "var(--color-accent-teal)" }}
                                >
                                    Visit Tata 1mg
                                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                    </svg>
                                </a>
                            </div>
                            <div className="flex justify-center lg:col-span-2">
                                <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-[#E8EDF2] to-[#D1D9E2]">
                                    {/* Speaker/event image placeholder */}
                                    <Image
                                        src="/images/tata1mg.png"
                                        alt="Prashant Tandon speaking at an event"
                                        width={400}
                                        height={300}
                                        className="h-auto w-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}
