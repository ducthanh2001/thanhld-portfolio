"use client";

import dynamic from "next/dynamic";

const DeskFolio = dynamic(() => import("@/vendor/deskfolio").then((m) => m.DeskFolio), {
  ssr: false,
  loading: () => (
    <div className="mx-auto h-[600px] w-full max-w-5xl animate-pulse rounded-3xl bg-surface-2" />
  ),
});

export function DeskShowcase() {
  return (
    <section id="about" className="min-h-dvh">
      <DeskFolio />
    </section>
  );
}
