export type Locale = "vi" | "en";

export interface Bilingual {
  vi: string;
  en: string;
}

export interface Identity {
  name: string;
  title: Bilingual;
  location: string;
  email: string;
  phone: string;
}

export interface SkillGroup {
  label: Bilingual;
  items: string[];
}

export interface RoleEntry {
  id: string;
  company: string;
  period: Bilingual;
  teamSize: number;
  stack: string[];
  bullets: Bilingual[];
}

export type ProjectMockup = "aeon" | "chatbot" | "escrow";

export interface ProjectEntry {
  id: string;
  title: string;
  period: Bilingual;
  teamSize: number;
  stack: string[];
  summary: Bilingual;
  bullets: Bilingual[];
  featured: boolean;
  mockup?: ProjectMockup;
}
