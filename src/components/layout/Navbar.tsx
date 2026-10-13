"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { enabledClients } from "@/lib/data/clients";
import { services } from "@/lib/data/services";

export default function Navbar() {
  const navLinks = [
    ...(enabledClients.length > 0 ? [{ label: "Referenzen", href: "#zusammenarbeit" }] : []),
    { label: "Team", href: "#ueber-uns" },
    { label: "Eigene Produkte", href: "/apps" },
  ];

  const [menuOpen, setMenuOpen] = useState(false);
  const servicesMenuRef = useRef<HTMLDetailsElement>(null);
  const pathname = usePathname();
  const resolveHref = (href: string) => href.startsWith("#") && pathname !== "/" ? "/" + href : href;

  useEffect(() => {
    const closeServicesOutside = (event: Event) => {
      const menu = servicesMenuRef.current;
      if (menu?.open && event.target instanceof Node && !menu.contains(event.target)) {
        menu.open = false;
      }
    };

    document.addEventListener("pointerdown", closeServicesOutside);
    document.addEventListener("focusin", closeServicesOutside);
    return () => {
      document.removeEventListener("pointerdown", closeServicesOutside);
      document.removeEventListener("focusin", closeServicesOutside);
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--color-border)] bg-white/95 backdrop-blur-md" onKeyDown={(event) => {
      if (event.key === "Escape") {
        if (menuOpen) event.currentTarget.querySelector<HTMLButtonElement>("button[aria-controls='mobile-navigation']")?.focus();
        setMenuOpen(false);
        event.currentTarget.querySelectorAll("details[open]").forEach((details) => {
          details.removeAttribute("open");
          details.querySelector("summary")?.focus();
        });
      }
    }}>
      <nav aria-label="Hauptnavigation" className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <Link href="/" onClick={() => setMenuOpen(false)} className="flex shrink-0 items-center gap-2.5 font-semibold text-[var(--color-heading)]">
          <Image src="/images/cubeon_favicon_blue_1024.png" alt="" width={28} height={28} />
          <span translate="no">Cubeon Solutions</span>
        </Link>
        <div className="hidden items-center gap-6 lg:flex">
          <details ref={servicesMenuRef} className="nav-services relative">
            <summary className="flex min-h-10 cursor-pointer list-none items-center gap-1.5 text-sm text-[var(--color-heading)] hover:text-[var(--color-brand)]">
              Leistungen
              <svg className="nav-services-chevron transition-transform duration-200" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </summary>
            <div className="absolute top-full left-0 mt-4 w-80 rounded-xl border border-[var(--color-border)] bg-white p-2 shadow-lg">
              <Link href={resolveHref("#dienstleistungen")} className="block rounded-lg px-4 py-3 text-sm font-semibold hover:bg-blue-50" onClick={(event) => event.currentTarget.closest("details")?.removeAttribute("open")}>Alle Leistungen</Link>
              {services.map((service) => <Link key={service.id} href={service.href} aria-current={pathname === service.href ? "page" : undefined} className="block rounded-lg px-4 py-3 text-sm hover:bg-blue-50 hover:text-[var(--color-brand)]" onClick={(event) => event.currentTarget.closest("details")?.removeAttribute("open")}>{service.name}</Link>)}
            </div>
          </details>
          {navLinks.map((link) => <Link key={link.href} href={resolveHref(link.href)} className="text-sm hover:text-[var(--color-brand)]">{link.label}</Link>)}
          <Link href={resolveHref("#kontakt")} className="button-primary text-sm">Vorhaben besprechen</Link>
        </div>
        <button type="button" onClick={() => setMenuOpen(!menuOpen)} className="rounded-lg p-3 text-[var(--color-heading)] hover:bg-blue-50 lg:hidden" aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"} aria-expanded={menuOpen} aria-controls="mobile-navigation">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            {menuOpen ? <path d="m6 6 12 12M6 18 18 6" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </nav>
      {menuOpen && (
        <div id="mobile-navigation" className="max-h-[calc(100dvh-5rem)] overflow-y-auto border-t border-[var(--color-border)] px-6 pb-6 lg:hidden">
          <div className="mx-auto flex max-w-6xl flex-col">
            <Link href={resolveHref("#dienstleistungen")} onClick={() => setMenuOpen(false)} className="pt-5 pb-2 text-xs font-semibold uppercase tracking-wider text-[var(--color-muted)]">Leistungen</Link>
            {services.map((service) => <Link key={service.id} href={service.href} onClick={() => setMenuOpen(false)} aria-current={pathname === service.href ? "page" : undefined} className="rounded-lg py-3 text-sm font-medium hover:text-[var(--color-brand)]">{service.name}</Link>)}
            <div className="my-3 border-t border-[var(--color-border)]" />
            {navLinks.map((link) => <Link key={link.href} href={resolveHref(link.href)} onClick={() => setMenuOpen(false)} className="py-3 text-sm hover:text-[var(--color-brand)]">{link.label}</Link>)}
            <Link href={resolveHref("#kontakt")} onClick={() => setMenuOpen(false)} className="button-primary mt-4">Vorhaben besprechen</Link>
          </div>
        </div>
      )}
    </header>
  );
}
