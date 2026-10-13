"use client";

import { useRef, type ReactNode } from "react";

interface ProductScrollerProps {
  children: ReactNode;
  labels: {
    scrollLabel: string;
    previous: string;
    next: string;
  };
}

export default function ProductScroller({ children, labels }: ProductScrollerProps) {
  const row = useRef<HTMLDivElement>(null);

  function scroll(direction: -1 | 1) {
    const container = row.current;
    if (!container) return;
    const card = container.firstElementChild;
    const gap = Number.parseFloat(getComputedStyle(container).columnGap) || 0;
    const distance = (card?.getBoundingClientRect().width ?? container.clientWidth) + gap;
    container.scrollBy({
      left: direction * distance,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
    });
  }

  return (
    <div>
      <div className="mb-5 flex justify-end">
        <div className="flex shrink-0 gap-2">
          <button type="button" onClick={() => scroll(-1)} aria-label={labels.previous} aria-controls="products-scroll-row" className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border)] bg-white text-[var(--color-brand)] transition-colors hover:bg-blue-50">
            <span aria-hidden="true">←</span>
          </button>
          <button type="button" onClick={() => scroll(1)} aria-label={labels.next} aria-controls="products-scroll-row" className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border)] bg-white text-[var(--color-brand)] transition-colors hover:bg-blue-50">
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
      <div
        ref={row}
        id="products-scroll-row"
        role="region"
        aria-label={labels.scrollLabel}
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.target === event.currentTarget && (event.key === "ArrowLeft" || event.key === "ArrowRight")) {
            event.preventDefault();
            scroll(event.key === "ArrowLeft" ? -1 : 1);
          }
        }}
        className="product-scroller flex snap-x snap-mandatory gap-6 overflow-x-auto overscroll-x-contain rounded-2xl pb-6"
      >
        {children}
      </div>
    </div>
  );
}
