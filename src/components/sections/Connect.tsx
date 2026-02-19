"use client";

import { useState, FormEvent } from "react";
import AnimatedSection from "@/components/ui/AnimatedSection";

/* ============================================
   Connect — Contact section with social links + form
   Clean, minimal design. Subtle dark background variant.
   ============================================ */

export default function Connect() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        /* TODO: Connect to backend / email service */
        console.log("Contact form submitted:", formData);
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitted(false), 4000);
    };

    return (
        <section id="connect" className="bg-[var(--color-dark)] py-20 sm:py-28">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
                    {/* Left: Intro + social links */}
                    <AnimatedSection direction="left">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-primary)]">
                                Connect
                            </p>
                            <h2 className="mt-3 font-[family-name:var(--font-playfair)] text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                                Let&rsquo;s talk healthcare,
                                <br />
                                India &amp; big ideas.
                            </h2>
                            <p className="mt-6 max-w-md text-base leading-relaxed text-[var(--color-text-muted)]">
                                Whether you&rsquo;re building in health, looking to collaborate,
                                or just want to exchange ideas — reach out.
                            </p>

                            {/* Social/professional links */}
                            <div className="mt-10 space-y-4">
                                {/* LinkedIn */}
                                <a
                                    href="https://www.linkedin.com/in/prashant-tandon-2802a4/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center gap-4 text-[var(--color-text-muted)] transition-colors hover:text-white"
                                >
                                    <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-gray-700 transition-colors group-hover:border-[var(--color-primary)] group-hover:bg-[var(--color-primary)]/10">
                                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                        </svg>
                                    </div>
                                    <span className="text-sm font-medium">LinkedIn</span>
                                </a>

                                {/* Twitter/X */}
                                <a
                                    href="https://x.com/tandon_prashant" /* TODO: Replace with actual Twitter/X link */
                                    className="group flex items-center gap-4 text-[var(--color-text-muted)] transition-colors hover:text-white"
                                >
                                    <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-gray-700 transition-colors group-hover:border-[var(--color-primary)] group-hover:bg-[var(--color-primary)]/10">
                                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                        </svg>
                                    </div>
                                    <span className="text-sm font-medium">Twitter / X</span>
                                </a>

                                {/* Email */}
                                <a
                                    href="mailto:kapoorjanesh.2003@gmail.com" /* TODO: Replace with actual email */
                                    className="group flex items-center gap-4 text-[var(--color-text-muted)] transition-colors hover:text-white"
                                >
                                    <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-gray-700 transition-colors group-hover:border-[var(--color-primary)] group-hover:bg-[var(--color-primary)]/10">
                                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                        </svg>
                                    </div>
                                    <span className="text-sm font-medium">Email</span>
                                </a>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Right: Contact form */}
                    <AnimatedSection direction="right" delay={0.15}>
                        <form
                            onSubmit={handleSubmit}
                            className="rounded-2xl border border-gray-700/50 bg-white/5 p-8 backdrop-blur-sm"
                        >
                            <div className="space-y-5">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="mb-2 block text-sm font-medium text-[var(--color-text-muted)]"
                                    >
                                        Name
                                    </label>
                                    <input
                                        id="name"
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) =>
                                            setFormData({ ...formData, name: e.target.value })
                                        }
                                        className="w-full rounded-lg border border-gray-700 bg-transparent px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-colors focus:border-[var(--color-primary)]"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="mb-2 block text-sm font-medium text-[var(--color-text-muted)]"
                                    >
                                        Email
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) =>
                                            setFormData({ ...formData, email: e.target.value })
                                        }
                                        className="w-full rounded-lg border border-gray-700 bg-transparent px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-colors focus:border-[var(--color-primary)]"
                                        placeholder="your@email.com"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="message"
                                        className="mb-2 block text-sm font-medium text-[var(--color-text-muted)]"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        required
                                        rows={4}
                                        value={formData.message}
                                        onChange={(e) =>
                                            setFormData({ ...formData, message: e.target.value })
                                        }
                                        className="w-full resize-none rounded-lg border border-gray-700 bg-transparent px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-colors focus:border-[var(--color-primary)]"
                                        placeholder="What's on your mind?"
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="mt-6 w-full rounded-lg bg-[var(--color-primary)] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#c9003d] hover:shadow-lg hover:shadow-[var(--color-primary)]/20"
                            >
                                {submitted ? "Message Sent ✓" : "Send Message"}
                            </button>
                        </form>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
}
