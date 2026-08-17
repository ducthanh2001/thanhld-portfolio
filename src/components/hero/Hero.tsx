"use client";

import { motion } from "motion/react";
import { useLocale } from "@/content/locale-context";
import { identity } from "@/content/cv-data";
import { Avatar3D } from "./Avatar3D";

export function Hero() {
  const { t, locale } = useLocale();

  return (
    <section id="top" className="relative scroll-mt-24 overflow-hidden pt-16 pb-20 sm:pt-24 sm:pb-28">
      <div className="mx-auto grid w-full max-w-5xl items-center gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 text-sm font-medium tracking-wide text-accent uppercase">
            {t.hero.kicker}
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
            {identity.name}
          </h1>
          <p className="mt-3 text-xl font-medium text-muted sm:text-2xl">
            {identity.title[locale]}
          </p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground/80">
            {t.hero.pitch}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/cv/Duc-Thanh-CV.pdf"
              download
              className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-sm transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              {t.hero.downloadCv}
            </a>
            <a
              href={`mailto:${identity.email}`}
              className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              {t.hero.contactMe}
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mx-auto"
        >
          <Avatar3D />
        </motion.div>
      </div>
    </section>
  );
}
