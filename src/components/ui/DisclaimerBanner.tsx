"use client";

/* ============================================
   DisclaimerBanner — Auto-scrolling horizontal marquee
   Fixed at the very top of the page to indicate this
   is a test/demo website.
   ============================================ */

export default function DisclaimerBanner() {
    const message =
        "⚠ This is a test website created for Prashant Tandon only. All images, information, and this website will be discarded if stated by Prashant Tandon himself. ⚠";

    return (
        <div className="relative z-[60] w-full overflow-hidden bg-[var(--color-primary)] py-2">
            <div className="marquee-track flex whitespace-nowrap">
                {/* Duplicate the text several times for seamless looping */}
                {Array.from({ length: 6 }).map((_, i) => (
                    <span
                        key={i}
                        className="mx-8 inline-block text-xs font-semibold uppercase tracking-wider text-white sm:text-sm"
                    >
                        {message}
                    </span>
                ))}
            </div>

            <style jsx>{`
        .marquee-track {
          animation: marquee 30s linear infinite;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .marquee-track {
            animation: none;
          }
        }
      `}</style>
        </div>
    );
}
