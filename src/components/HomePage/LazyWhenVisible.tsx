"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type LazyWhenVisibleProps = {
  children: ReactNode;
  minHeight?: number;
  rootMargin?: string;
};

function isNearViewport(el: HTMLElement, rootMargin: string) {
  const margin = Number.parseInt(rootMargin, 10) || 0;
  const rect = el.getBoundingClientRect();
  const viewportHeight =
    window.innerHeight || document.documentElement.clientHeight;
  return rect.top < viewportHeight + margin;
}

export default function LazyWhenVisible({
  children,
  minHeight = 320,
  rootMargin = "280px 0px",
}: LazyWhenVisibleProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || visible) return;

    const reveal = () => setVisible(true);

    if (isNearViewport(el, rootMargin)) {
      reveal();
      return;
    }

    if (!("IntersectionObserver" in window)) {
      reveal();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          reveal();
          observer.disconnect();
        }
      },
      { rootMargin },
    );

    observer.observe(el);

    const fallback = window.setTimeout(reveal, 2500);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, [rootMargin, visible]);

  return (
    <div ref={ref} style={visible ? undefined : { minHeight }}>
      {visible ? children : null}
    </div>
  );
}
