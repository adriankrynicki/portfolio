import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {
  Language,
  Section,
  Translations,
  HeroTranslations,
  SkillsTranslations,
  ProjectsTranslations,
  AboutMeTranslations,
} from '../types/translation.type';

@Injectable({
  providedIn: 'root', // Macht den Service global verfügbar
})
export class TranslationService {
  private currentLang = new BehaviorSubject<Language>('en');
  currentLang$ = this.currentLang.asObservable();

  private translations: Translations = {
    en: {
      hero: {
        about: 'About me',
        skills: 'Skills',
        projects: 'Projects',
        role: 'Frontend Developer',
        checkMyWork: 'Check my work',
        contactMe: 'Contact me',
        availableForRemoteWork: 'Available for remote work',
        frontendDeveloper: 'Frontend Developer',
        basedInFrankfurt: 'Based in Frankfurt am Main',
        openToOpportunities: 'Open to opportunities',
      },
      aboutMe: {
        whoIAm: 'Who I am',
        aboutMeHeader: 'About me',
        aboutText:
          "Hi there, I'm Adrian! My journey began with a childhood fascination for computers and the joy of making things work. This passion has led me to dive deep into web development, where every debugging success brings that rewarding feeling of achievement.",
        location:
          'Currently based in Frankfurt am Main, embracing remote work opportunities.',
        mindset:
          'Always eager to explore new technologies and frameworks. I believe in continuous learning and see every challenge as an opportunity to expand my skillset.',
        approach:
          "My approach combines analytical thinking with creative problem-solving. Through collaborative team projects, I've learned to persist until finding the most elegant solution. Each challenge is an opportunity to grow and refine my development skills.",
      },
      skills: {
        // Skills Übersetzungen
      },
      projects: {
        // Projekt Übersetzungen
      },
    },
    de: {
      hero: {
        about: 'Über mich',
        skills: 'Fähigkeiten',
        projects: 'Projekte',
        role: 'Frontend Entwickler',
        checkMyWork: 'Meine Arbeit ansehen',
        contactMe: 'Kontaktiere mich',
        availableForRemoteWork: 'Verfügbar für Remote-Arbeit',
        frontendDeveloper: 'Frontend Entwickler',
        basedInFrankfurt: 'Ansässig in Frankfurt am Main',
        openToOpportunities: 'Offen für Möglichkeiten',
      },
      aboutMe: {
        whoIAm: 'Wer ich bin',
        aboutMeHeader: 'Über mich',
        aboutText:
          "Hallo, ich bin Adrian! Meine Reise begann mit einer Kindheitsfaszination für Computer und der Freude daran, Dinge zum Laufen zu bringen. Diese Leidenschaft hat mich zur Webentwicklung geführt, wo jeder Debugging-Erfolg dieses belohnende Gefühl der Leistung bringt.",
        location: "Wohnhaft in Frankfurt am Main, offen für Remote-Arbeit.",
        mindset: "Stets begeistert neue Technologien und Frameworks zu erkunden. Ich glaube an kontinuierliches Lernen und sehe jede Herausforderung als Chance, meine Fähigkeiten zu erweitern.",
        approach: "Mein Ansatz verbindet analytisches Denken mit kreativer Problemlösung. Durch kollaborative Teamprojekte habe ich gelernt, beharrlich nach der elegantesten Lösung zu suchen. Jede Herausforderung ist eine Chance zu wachsen und meine Entwicklungsfähigkeiten zu verfeinern.",
      },
      skills: {
        // Skills Übersetzungen
      },
      projects: {
        // Projekt Übersetzungen
      },
    },
  };

  setLanguage(lang: Language) {
    this.currentLang.next(lang);
  }

  getTranslation(section: 'hero', key: keyof HeroTranslations): string;
  getTranslation(section: 'aboutMe', key: keyof AboutMeTranslations): string;
  getTranslation(section: 'skills', key: keyof SkillsTranslations): string;
  getTranslation(section: 'projects', key: keyof ProjectsTranslations): string;
  getTranslation(section: Section, key: string): string {
    const currentLang = this.currentLang.value;
    const sectionTranslations = this.translations[currentLang][section];
    return (sectionTranslations as any)[key] || key.toString();
  }
}
