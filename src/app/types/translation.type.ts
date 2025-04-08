export type Language = 'de' | 'en';
export type Section = 'hero' | 'skills' | 'projects';

// Definiere die Struktur für jede Sektion
export interface HeroTranslations {
  about: string;
  skills: string;
  projects: string;
  role: string;
  checkMyWork: string;
  contactMe: string;
  availableForRemoteWork: string;
  frontendDeveloper: string;
  basedInFrankfurt: string;
  openToOpportunities: string;
}

export interface SkillsTranslations {
  // Füge hier Skills-spezifische Übersetzungskeys hinzu
}

export interface ProjectsTranslations {
  // Füge hier Project-spezifische Übersetzungskeys hinzu
}

// Hauptstruktur der Übersetzungen
export interface Translations {
  en: {
    hero: HeroTranslations;
    skills: SkillsTranslations;
    projects: ProjectsTranslations;
  };
  de: {
    hero: HeroTranslations;
    skills: SkillsTranslations;
    projects: ProjectsTranslations;
  };
}
