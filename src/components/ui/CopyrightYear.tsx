"use client";

import { useSyncExternalStore } from "react";

function currentYear() {
  return new Date().getFullYear();
}

function subscribe(onChange: () => void) {
  let timer: number;

  function schedule() {
    const now = new Date();
    const nextMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    timer = window.setTimeout(() => {
      onChange();
      schedule();
    }, nextMidnight.getTime() - now.getTime());
  }

  function refresh() {
    window.clearTimeout(timer);
    onChange();
    schedule();
  }

  schedule();
  window.addEventListener("focus", refresh);
  document.addEventListener("visibilitychange", refresh);

  return () => {
    window.clearTimeout(timer);
    window.removeEventListener("focus", refresh);
    document.removeEventListener("visibilitychange", refresh);
  };
}

export default function CopyrightYear({ initialYear }: { initialYear: number }) {
  const year = useSyncExternalStore(subscribe, currentYear, () => initialYear);
  return <span>{year}</span>;
}
