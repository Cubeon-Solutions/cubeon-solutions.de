"use client";

import { useEffect, useState } from "react";

const PHRASES = [
  "Mobile Apps.",
  "Full-Stack-Lösungen.",
  "KI-Anwendungen.",
  "Augmented Reality.",
  "Prototypen & MVPs.",
];

const TYPING_SPEED = 60;
const DELETING_SPEED = 35;
const PAUSE_AFTER_TYPE = 1800;
const PAUSE_AFTER_DELETE = 400;

export default function TypewriterText() {
  const [displayed, setDisplayed] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = PHRASES[phraseIndex];

    if (!isDeleting && displayed === current) {
      const timeout = setTimeout(() => setIsDeleting(true), PAUSE_AFTER_TYPE);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && displayed === "") {
      const timeout = setTimeout(() => {
        setIsDeleting(false);
        setPhraseIndex((i) => (i + 1) % PHRASES.length);
      }, PAUSE_AFTER_DELETE);
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(
      () => {
        setDisplayed(
          isDeleting ? current.slice(0, displayed.length - 1) : current.slice(0, displayed.length + 1)
        );
      },
      isDeleting ? DELETING_SPEED : TYPING_SPEED
    );

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, phraseIndex]);

  return (
    <span>
      {displayed}
      <span className="inline-block w-0.5 h-[1em] ml-0.5 align-middle bg-[var(--color-brand)] animate-blink" />
    </span>
  );
}
