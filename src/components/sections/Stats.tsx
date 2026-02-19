"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import CountUp from "@/components/ui/CountUp";

/* ============================================
   Stats — Impact bar with animated count-up numbers
   Dark background strip with 4 key metrics.
   ============================================ */

const stats = [
    {
        value: 15,
        suffix: "+",
        label: "Years building digital healthcare in India",
    },
    {
        prefix: "₹",
        value: 10300,
        suffix: " Cr+",
        label: "Tata 1mg Valuation",
    },
    {
        value: 1000,
        suffix: "+",
        label: "Cities with healthcare access delivered",
    },
    {
        prefix: "$",
        value: 1.25,
        suffix: "B+",
        label: "Unicorn company built",
        isDecimal: true,
    },
];

export default function Stats() {
    return (
        <section className="bg-[var(--color-dark)] py-16 sm:py-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <AnimatedSection>
                    <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-12">
                        {stats.map((stat, i) => (
                            <div key={i} className="text-center">
                                <div className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                                    {stat.isDecimal ? (
                                        <span>
                                            {stat.prefix}1.25{stat.suffix}
                                        </span>
                                    ) : (
                                        <CountUp
                                            end={stat.value}
                                            prefix={stat.prefix || ""}
                                            suffix={stat.suffix || ""}
                                            duration={2200}
                                        />
                                    )}
                                </div>
                                <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)] sm:text-base">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}
