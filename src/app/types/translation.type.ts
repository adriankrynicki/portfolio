export type Language = 'de' | 'en';
export type Section = 'hero' | 'skills' | 'projects' | 'aboutMe';

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

export interface AboutMeTranslations {
  whoIAm: string;
  aboutMeHeader: string;
  aboutText: string;
  location: string;
  mindset: string;
  approach: string;
}

export interface SkillsTranslations {
  technologies: string;
  skillsSet: string;
  skillsDescription: string;
  anotherSkills: string;
  anotherSkillsColor: string;
  contactMeText: string;
  letsTalk: string;
}

export interface ProjectsTranslations {
  // Füge hier Project-spezifische Übersetzungskeys hinzu
}

// Hauptstruktur der Übersetzungen
export interface Translations {
  en: {
    hero: HeroTranslations;
    aboutMe: AboutMeTranslations;
    skills: SkillsTranslations;
    projects: ProjectsTranslations;
  };
  de: {
    hero: HeroTranslations;
    aboutMe: AboutMeTranslations;
    skills: SkillsTranslations;
    projects: ProjectsTranslations;
  };
}
