"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const Avatar3DScene = dynamic(() => import("./Avatar3DScene"), {
  ssr: false,
  loading: () => <div className="h-full w-full animate-pulse rounded-3xl bg-surface-2" />,
});

function StaticAvatarFallback() {
  return (
    <div className="flex h-full w-full items-center justify-center rounded-3xl bg-gradient-to-br from-accent-soft to-surface-2">
      <div className="h-28 w-28 rounded-2xl border-4 border-accent/60 bg-surface shadow-lg" />
    </div>
  );
}

export function Avatar3D() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    // eslint-disable-next-line react-hooks/set-state-in-effect -- reading a client-only media query at mount, can't be a lazy initializer since this component is also server-rendered
    setReducedMotion(query.matches);
    const handler = (event: MediaQueryListEvent) => setReducedMotion(event.matches);
    query.addEventListener("change", handler);
    return () => query.removeEventListener("change", handler);
  }, []);

  return (
    <div className="relative aspect-square w-full max-w-md">
      {reducedMotion ? <StaticAvatarFallback /> : <Avatar3DScene />}
    </div>
  );
}
