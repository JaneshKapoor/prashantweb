/* ============================================
   Footer — Minimal footer with copyright and nav links
   ============================================ */

const footerLinks = [
    { label: "About", href: "#about" },
    { label: "Journey", href: "#journey" },
    { label: "Tata 1mg", href: "https://www.1mg.com" },
    { label: "Connect", href: "#connect" },
];

export default function Footer() {
    return (
        <footer className="border-t border-[var(--color-border)] bg-white py-8">
            <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-6 sm:flex-row sm:justify-between lg:px-8">
                <p
                    className="text-sm"
                    style={{ color: "var(--color-text-secondary)" }}
                >
                    &copy; 2025 Prashant Tandon. Co-Founder &amp; CEO, Tata 1mg.
                </p>

                <nav aria-label="Footer navigation">
                    <ul className="flex items-center gap-6">
                        {footerLinks.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    target={link.href.startsWith("http") ? "_blank" : undefined}
                                    rel={
                                        link.href.startsWith("http")
                                            ? "noopener noreferrer"
                                            : undefined
                                    }
                                    className="text-sm transition-colors hover:text-[var(--color-primary)]"
                                    style={{ color: "var(--color-text-muted)" }}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </footer>
    );
}
