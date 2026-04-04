"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { href: "#anasayfa", label: "Ana Sayfa" },
  { href: "#hakkimizda", label: "Hakkımızda" },
  { href: "#hizmetler", label: "Hizmetler" },
  { href: "#yorumlar", label: "Yorumlar" },
  { href: "#iletisim", label: "İletişim" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#f0f3f8]/95 shadow-lg backdrop-blur-[12px]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-20">
        <a
          href="#anasayfa"
          className="font-heading text-2xl font-bold tracking-tight"
          style={{ color: scrolled ? "var(--color-primary)" : "var(--color-white)" }}
        >
          Ankara <span style={{ color: "var(--color-accent)" }}>Abiye</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="link-hover-effect text-[0.8rem] uppercase tracking-[0.15em] font-medium transition-colors duration-300"
              style={{
                color: scrolled
                  ? "var(--color-text)"
                  : "rgba(255,255,255,0.9)",
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#iletisim"
            className="rounded-full px-7 py-2.5 text-[0.8rem] uppercase tracking-[0.15em] font-medium transition-all duration-300 hover:scale-[1.03] hover:shadow-xl"
            style={{
              backgroundColor: "var(--color-accent)",
              color: "var(--color-white)",
            }}
          >
            İletişim
          </a>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5 z-[60]"
          aria-label="Menüyü aç"
        >
          <span
            className="block w-6 h-[2px] transition-all duration-300 origin-center"
            style={{
              backgroundColor: mobileOpen || scrolled ? "var(--color-primary)" : "var(--color-white)",
              transform: mobileOpen ? "rotate(45deg) translate(2px, 5px)" : "none",
            }}
          />
          <span
            className="block w-6 h-[2px] transition-all duration-300"
            style={{
              backgroundColor: mobileOpen || scrolled ? "var(--color-primary)" : "var(--color-white)",
              opacity: mobileOpen ? 0 : 1,
            }}
          />
          <span
            className="block w-6 h-[2px] transition-all duration-300 origin-center"
            style={{
              backgroundColor: mobileOpen || scrolled ? "var(--color-primary)" : "var(--color-white)",
              transform: mobileOpen ? "rotate(-45deg) translate(2px, -5px)" : "none",
            }}
          />
        </button>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-50 flex flex-col items-center justify-center transition-all duration-500 lg:hidden ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ backgroundColor: "rgba(250,250,250,0.98)" }}
      >
        {navLinks.map((link, i) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMobileOpen(false)}
            className="text-2xl font-heading font-semibold mb-8 transition-all duration-500"
            style={{
              color: "var(--color-primary)",
              transform: mobileOpen ? "translateY(0)" : "translateY(20px)",
              opacity: mobileOpen ? 1 : 0,
              transitionDelay: `${i * 80}ms`,
            }}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#iletisim"
          onClick={() => setMobileOpen(false)}
          className="mt-4 rounded-full px-10 py-4 text-sm uppercase tracking-[0.15em] font-medium transition-all duration-500"
          style={{
            backgroundColor: "var(--color-accent)",
            color: "var(--color-white)",
            transform: mobileOpen ? "translateY(0)" : "translateY(20px)",
            opacity: mobileOpen ? 1 : 0,
            transitionDelay: `${navLinks.length * 80}ms`,
          }}
        >
          İletişim
        </a>
      </div>
    </header>
  );
}
