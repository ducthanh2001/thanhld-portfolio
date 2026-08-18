"use client";

import dynamic from "next/dynamic";
import { motion } from "motion/react";
import "playcaptcha/clawcaptcha.css";
import "./captcha.css";

const ClawCaptcha = dynamic(() => import("playcaptcha").then((m) => m.ClawCaptcha), {
  ssr: false,
  loading: () => (
    <div className="df-skeleton mx-auto flex h-125 w-full max-w-full items-center justify-center rounded-4xl">
      <span aria-hidden className="select-none text-4xl opacity-20">
        🦖
      </span>
    </div>
  ),
});

export function CaptchaShowcase() {

  return (
    <section className="captcha-stage flex min-h-dvh items-center justify-center px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="captcha-card origin-center scale-100 sm:scale-[1.2] md:scale-[1.45] lg:scale-[1.7] xl:scale-[2] 2xl:scale-[2.2]"
      >
        <ClawCaptcha />
      </motion.div>
    </section>
  );
}
