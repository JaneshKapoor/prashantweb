/* ============================================
   Blog — Placeholder "Coming Soon" page
   Clean minimal state for the future perspectives/blog section.
   ============================================ */

import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Perspectives — Prashant Tandon",
    description:
        "Thoughts on healthcare, entrepreneurship, and India — by Prashant Tandon, Co-Founder & CEO of Tata 1mg.",
};

export default function BlogPage() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center px-6">
            <div className="text-center">
                <p
                    className="text-sm font-semibold uppercase tracking-widest"
                    style={{ color: "var(--color-primary)" }}
                >
                    Perspectives
                </p>
                <h1 className="mt-4 font-[family-name:var(--font-playfair)] text-4xl font-bold sm:text-5xl">
                    Thoughts, soon.
                </h1>
                <p
                    className="mx-auto mt-4 max-w-md text-base leading-relaxed"
                    style={{ color: "var(--color-text-secondary)" }}
                >
                    A space for ideas on healthcare, entrepreneurship, building in India,
                    and the things that matter. Coming soon.
                </p>
                <Link
                    href="/"
                    className="mt-8 inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:text-[var(--color-primary)]"
                    style={{ color: "var(--color-accent-teal)" }}
                >
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
                            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                        />
                    </svg>
                    Back to home
                </Link>
            </div>
        </main>
    );
}
