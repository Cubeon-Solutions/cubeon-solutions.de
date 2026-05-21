import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[var(--color-border)] bg-white">
      <div className="mx-auto max-w-5xl px-6 py-8 flex flex-col items-center gap-3 text-sm text-[var(--color-muted)]">
        <Link href="/" aria-label="Cubeon Solutions Startseite">
          <Image
            src="/images/cubeon_favicon_blue_1024.png"
            alt="Cubeon Solutions Logo"
            width={32}
            height={32}
          />
        </Link>
        <p>© {year} Cubeon Solutions UG (haftungsbeschränkt)</p>
        <div className="flex gap-4">
          <Link href="/impressum" className="hover:text-[var(--color-brand)] transition-colors">
            Impressum
          </Link>
          <span aria-hidden>·</span>
          <Link href="/datenschutz" className="hover:text-[var(--color-brand)] transition-colors">
            Datenschutz
          </Link>
        </div>
      </div>
    </footer>
  );
}
