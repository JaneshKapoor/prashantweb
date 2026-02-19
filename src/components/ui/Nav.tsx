"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Link from "next/link";

/* ============================================
   Nav — Sticky navigation with scroll-aware transparency
   Transparent on top → frosted glass on scroll.
   Mobile: hamburger with slide-down menu.
   ============================================ */

const navLinks = [
    { label: "About", href: "#about" },
    { label: "Journey", href: "#journey" },
    { label: "Mission", href: "#mission" },
    { label: "Perspectives", href: "#perspectives" },
    { label: "Connect", href: "#connect" },
];

export default function Nav() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const shouldReduceMotion = useReducedMotion();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    /* Close mobile menu on nav link click */
    const handleNavClick = () => {
        setMobileOpen(false);
    };

    return (
        <header
            className={`fixed top-9 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? "nav-frosted shadow-sm"
                : "bg-transparent"
                }`}
        >
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
                {/* Logo */}
                <Link
                    href="/"
                    className="font-[family-name:var(--font-playfair)] text-xl font-semibold tracking-tight"
                    style={{ color: "var(--color-text)" }}
                >
                    Prashant Tandon
                </Link>

                {/* Desktop nav links */}
                <ul className="hidden items-center gap-8 md:flex">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className="text-sm font-medium transition-colors duration-200 hover:text-[var(--color-primary)]"
                                style={{ color: "var(--color-text-secondary)" }}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Mobile hamburger button */}
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="flex h-10 w-10 items-center justify-center rounded-lg md:hidden"
                    aria-label={mobileOpen ? "Close menu" : "Open menu"}
                    aria-expanded={mobileOpen}
                >
                    <div className="relative h-5 w-6">
                        <span
                            className={`absolute left-0 block h-0.5 w-6 bg-[var(--color-text)] transition-all duration-300 ${mobileOpen ? "top-2.5 rotate-45" : "top-0"
                                }`}
                        />
                        <span
                            className={`absolute left-0 top-2.5 block h-0.5 w-6 bg-[var(--color-text)] transition-opacity duration-300 ${mobileOpen ? "opacity-0" : "opacity-100"
                                }`}
                        />
                        <span
                            className={`absolute left-0 block h-0.5 w-6 bg-[var(--color-text)] transition-all duration-300 ${mobileOpen ? "top-2.5 -rotate-45" : "top-5"
                                }`}
                        />
                    </div>
                </button>
            </nav>

            {/* Mobile dropdown menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden border-b border-[var(--color-border)] bg-white md:hidden"
                    >
                        <ul className="flex flex-col gap-1 px-6 py-4">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        onClick={handleNavClick}
                                        className="block rounded-lg px-4 py-3 text-sm font-medium transition-colors hover:bg-[var(--color-bg-alt)]"
                                        style={{ color: "var(--color-text-secondary)" }}
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
