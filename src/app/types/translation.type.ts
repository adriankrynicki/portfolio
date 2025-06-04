export type Language = 'de' | 'en';
export type Section = 'hero' | 'skills' | 'projects' | 'aboutMe' | 'references' | 'contact';

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
  portfolio: string;
  featuredProjects: string;
  exploreText: string;
  whatIsThisAbout: string;
  nextProject: string;
  liveTest: string;
  joinDescription: string;
  polloLocoDescription: string;
  daBubbleDescription: string;
}

export interface ReferencesTranslations {
  colleaguesOpinion: string;
}

export interface ContactTranslations {
  contacktMe: string;
  letsWork: string;
  gotProblem: string;
  description: string;
  needFrontendDeveloper: string;
  letTalk: string;
  yourName: string;
  namePlaceholder: string;
  yourEmail: string;
  emailPlaceholder: string;
  howCanIHelpYou: string;
  messagePlaceholder: string;
  privacyPolicy: string;
  privacyPolicyPart1: string;
  privacyPolicyPart2: string;
  sayHello: string;
}
export interface Translations {
  en: {
    hero: HeroTranslations;
    aboutMe: AboutMeTranslations;
    skills: SkillsTranslations;
    projects: ProjectsTranslations;
    references: ReferencesTranslations;
    contact: ContactTranslations;
  };
  de: {
    hero: HeroTranslations;
    aboutMe: AboutMeTranslations;
    skills: SkillsTranslations;
    projects: ProjectsTranslations;
    references: ReferencesTranslations;
    contact: ContactTranslations;
  };
}
