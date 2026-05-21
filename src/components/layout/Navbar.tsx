"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Über uns", href: "#ueber-uns" },
  { label: "Leistungen", href: "#dienstleistungen" },
  { label: "Apps", href: "#apps" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-200 ${
        scrolled ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2.5 font-semibold text-[var(--color-heading)]">
          <Image
            src="/images/cubeon_favicon_blue_1024.png"
            alt="Cubeon Solutions"
            width={28}
            height={28}
          />
          Cubeon Solutions
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[var(--color-body)] hover:text-[var(--color-brand)] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#kontakt"
            className="rounded-lg bg-[var(--color-brand)] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[var(--color-brand-dark)] transition-colors"
          >
            Jetzt anfragen
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden p-2 rounded-md text-[var(--color-body)] hover:bg-gray-100 transition-colors"
          aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={menuOpen}
        >
          <span className="block w-5 h-0.5 bg-current mb-1" />
          <span className="block w-5 h-0.5 bg-current mb-1" />
          <span className="block w-5 h-0.5 bg-current" />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-[var(--color-border)] px-6 pb-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm text-[var(--color-body)] hover:text-[var(--color-brand)] transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#kontakt"
            onClick={() => setMenuOpen(false)}
            className="rounded-lg bg-[var(--color-brand)] px-4 py-2.5 text-sm font-semibold text-white text-center hover:bg-[var(--color-brand-dark)] transition-colors"
          >
            Jetzt anfragen
          </a>
        </div>
      )}
    </header>
  );
}
