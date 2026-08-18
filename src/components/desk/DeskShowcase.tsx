"use client";

import dynamic from "next/dynamic";

const DeskFolio = dynamic(() => import("@/vendor/deskfolio").then((m) => m.DeskFolio), {
  ssr: false,
  loading: () => (
    <div className="df-skeleton mx-auto flex h-[600px] w-full max-w-5xl items-center justify-center rounded-3xl">
      <span aria-hidden className="select-none text-5xl font-bold tracking-tight text-foreground/10">
        ĐT
      </span>
    </div>
  ),
});

export function DeskShowcase() {
  return (
    <section id="about" className="min-h-dvh">
      <DeskFolio />
    </section>
  );
}
