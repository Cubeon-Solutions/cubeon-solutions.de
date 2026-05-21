import Image from "next/image";

interface AppStoreBadgeProps {
  url: string;
  size?: "sm" | "md";
}

export default function AppStoreBadge({ url, size = "md" }: AppStoreBadgeProps) {
  const height = size === "sm" ? 36 : 44;
  const width = size === "sm" ? 108 : 132;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Im App Store laden"
      className="inline-block transition-opacity hover:opacity-80"
    >
      <Image
        src="/images/app-store-badge.svg"
        alt="Laden im App Store"
        width={width}
        height={height}
        unoptimized
      />
    </a>
  );
}
