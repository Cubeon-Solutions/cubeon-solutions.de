import Image from "next/image";

interface PlayStoreBadgeProps {
  url: string;
  size?: "sm" | "md";
}

export default function PlayStoreBadge({ url, size = "md" }: PlayStoreBadgeProps) {
  const height = size === "sm" ? 36 : 44;
  const width = size === "sm" ? 121 : 148;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Bei Google Play laden"
      className="inline-block transition-opacity hover:opacity-80"
    >
      <Image
        src="/images/google-play-badge.png"
        alt="Jetzt bei Google Play"
        width={width}
        height={height}
        unoptimized
      />
    </a>
  );
}
