import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {
  Language,
  Section,
  Translations,
  HeroTranslations,
  SkillsTranslations,
  ProjectsTranslations,
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
        basedInFrankfurt: 'ansässig in Frankfurt am Main',
        openToOpportunities: 'Offen für Möglichkeiten',
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
  getTranslation(section: 'skills', key: keyof SkillsTranslations): string;
  getTranslation(section: 'projects', key: keyof ProjectsTranslations): string;
  getTranslation(section: Section, key: string): string {
    const currentLang = this.currentLang.value;
    const sectionTranslations = this.translations[currentLang][section];
    return (sectionTranslations as any)[key] || key.toString();
  }
}
