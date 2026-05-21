import Image from "next/image";
import type { TeamMember } from "@/lib/data/team";

export default function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="flex flex-col rounded-2xl border border-[var(--color-border)] bg-white shadow-sm overflow-hidden">
      <div className="relative aspect-square w-full">
        <Image
          src={member.imageSrc}
          alt={member.imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="p-5">
        <p className="font-semibold text-[var(--color-heading)]">
          {member.name}
        </p>
        <p className="text-xs text-[var(--color-muted)] mb-1">{member.degree}</p>
        <p className="text-sm font-medium text-[var(--color-brand)] mb-2">
          {member.role}
        </p>
        <p className="text-sm text-[var(--color-body)] leading-relaxed">
          {member.description}
        </p>
      </div>
    </div>
  );
}
