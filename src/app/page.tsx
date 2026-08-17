import { Hero } from "@/components/hero/Hero";
import { DeskShowcase } from "@/components/desk/DeskShowcase";
import { CaptchaShowcase } from "@/components/captcha/CaptchaShowcase";

export default function Home() {
  return (
    <main className="flex-1">
      <DeskShowcase />
    </main>
  );
}
