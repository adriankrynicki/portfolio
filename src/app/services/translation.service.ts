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
  ReferencesTranslations,
  ContactTranslations,
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
        whoIAm: 'Who I Am',
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
        technologies: 'Technologies',
        skillsSet: 'Skill Set',
        skillsDescription:
          'A short introduction of your skills. Highlight your experience of  using different front-end technologies and emphasise your openness to learning and adapting to new technologies. Show how important it is for you to keep up with the rapid changes in web development.',
        anotherSkills: 'You need',
        anotherSkillsColor: 'another skill?',
        contactMeText: 'Feel free to contact me. I look forward to expanding on my previous knowledge.',
        letsTalk: "Let's Talk",
      },
      projects: {
        portfolio: 'Portfolio',
        featuredProjects: 'Featured Projects',
        exploreText: 'Explore a selection of my work here - Interact with projects to see my skills in action.',
        whatIsThisAbout: 'What is this project about?',
        nextProject: 'Next project',
        liveTest: 'Live Test',
        joinDescription: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
        polloLocoDescription: 'A fun Jump-and-Run game based on object-oriented programming with JavaScript.',
        daBubbleDescription: 'A Slack-inspired chat application with real-time messaging and channel management.'
      },
      references: {
        colleaguesOpinion: 'What my colleagues say about me',
      },
      contact: {
        contacktMe: 'Contact me',
        letsWork: 'Let\'s work together',
        gotProblem: 'Got a problem to solve?',
        description: 'I\'m an open-minded developer seeking new challenges and opportunities. With clear goals and a passion for innovation, I\'m ready to bring fresh perspectives and valuable solutions to your projects. Let\'s connect and explore how we can create something amazing together.',
        needFrontendDeveloper: 'Need a Frontend Developer?',
        letTalk: 'Let\'s talk!',
        yourName: 'What\'s your name?',
        namePlaceholder: 'Your name goes here',
        yourEmail: 'What\'s your email?',
        emailPlaceholder: 'youremail@example.com',
        howCanIHelpYou: 'How can I help you?',
        messagePlaceholder: 'Hello Adrian, I am interested in...',
        privacyPolicy: 'privacy policy',
        privacyPolicyPart1: 'I\'ve read the',
        privacyPolicyPart2: 'and agree to processing of my data as outlined.',
        sayHello: 'Say Hello ;D',
      }
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
          'Hallo, ich bin Adrian! Meine Reise begann mit einer Kindheitsfaszination für Computer und der Freude daran, Dinge zum Laufen zu bringen. Diese Leidenschaft hat mich zur Webentwicklung geführt, wo jeder Debugging-Erfolg dieses belohnende Gefühl der Leistung bringt.',
        location: 'Wohnhaft in Frankfurt am Main, offen für Remote-Arbeit.',
        mindset:
          'Stets begeistert neue Technologien und Frameworks zu erkunden. Ich glaube an kontinuierliches Lernen und sehe jede Herausforderung als Chance, meine Fähigkeiten zu erweitern.',
        approach:
          'Mein Ansatz verbindet analytisches Denken mit kreativer Problemlösung. Durch kollaborative Teamprojekte habe ich gelernt, beharrlich nach der elegantesten Lösung zu suchen. Jede Herausforderung ist eine Chance zu wachsen und meine Entwicklungsfähigkeiten zu verfeinern.',
      },
      skills: {
        technologies: 'Technologien',
        skillsSet: 'Fähigkeiten',
        skillsDescription:
          'Eine kurze Einführung in deine Fähigkeiten. Hervorhebe deine Erfahrung mit verschiedenen Front-End-Technologien und betone deine Offenheit für das Lernen und Anpassen an neue Technologien. Zeige, wie wichtig es für dich ist, mit den schnellen Änderungen in der Webentwicklung Schritt zu halten.',
        anotherSkills: 'Du brauchst eine andere Fähigkeit?',
        anotherSkillsColor: 'Fähigkeit?',
        contactMeText: 'Kontaktiere mich gerne. Ich freue mich auf die Erweiterung meiner bisherigen Kenntnisse.',
        letsTalk: "Lass' uns reden",
      },
      projects: {
        portfolio: 'Portfolio',
        featuredProjects: 'Ausgewählte Projekte',
        exploreText: 'Entdecken Sie hier eine Auswahl meiner Arbeiten - Interagieren Sie mit den Projekten, um meine Fähigkeiten in Aktion zu sehen.',
        whatIsThisAbout: 'Worum geht es in diesem Projekt?',
        nextProject: 'Nächstes Projekt',
        liveTest: 'Live Test',
        joinDescription: 'Aufgabenmanager inspiriert vom Kanban-System. Erstellen und organisieren Sie Aufgaben mit Drag-and-Drop-Funktionen.',
        polloLocoDescription: 'Ein unterhaltsames Jump-and-Run-Spiel, basierend auf objektorientierter Programmierung mit JavaScript.',
        daBubbleDescription: 'Eine von Slack inspirierte Chat-Anwendung mit Echtzeit-Messaging und Kanal-Management.'
      },
      references: {
        colleaguesOpinion: 'Was meine Kollegen über mich sagen',
      },
      contact: { 
        contacktMe: 'Kontaktiere mich',
        letsWork: 'Lass\' uns zusammenarbeiten',
        gotProblem: 'Hast du ein Problem zu lösen?',
        description: 'Ich bin ein offener Entwickler, der neue Herausforderungen und Möglichkeiten sucht. Mit klaren Zielen und einer Leidenschaft für Innovation bin ich bereit, neue Perspektiven und wertvolle Lösungen für deine Projekte zu bringen. Lass uns verbinden und erkunden, wie wir zusammen etwas Großartiges schaffen können.',
        needFrontendDeveloper: 'Brauchst du einen Frontend-Entwickler?',
        letTalk: 'Sprich mich an!',
        yourName: 'Was ist dein Name?',
        namePlaceholder: 'Dein Name geht hier',
        yourEmail: 'Was ist deine E-Mail?',
        emailPlaceholder: 'deine-email@beispiel.com',
        howCanIHelpYou: 'Wie kann ich dir helfen?',
        messagePlaceholder: 'Hallo Adrian, ich bin interessiert an...',
        privacyPolicy: 'Datenschutzrichtlinie',
        privacyPolicyPart1: 'Ich habe die',
        privacyPolicyPart2: 'gelesen und stimme der Verarbeitung meiner Daten gemäß der Erklärung zu.',
        sayHello: 'Hallo ;D',
      }
    },
  };

  setLanguage(lang: Language) {
    this.currentLang.next(lang);
  }

  getTranslation(section: 'hero', key: keyof HeroTranslations): string;
  getTranslation(section: 'aboutMe', key: keyof AboutMeTranslations): string;
  getTranslation(section: 'skills', key: keyof SkillsTranslations): string;
  getTranslation(section: 'projects', key: keyof ProjectsTranslations): string;
  getTranslation(section: 'references', key: keyof ReferencesTranslations): string;
  getTranslation(section: 'contact', key: keyof ContactTranslations): string;
  getTranslation(section: Section, key: string): string {
    const currentLang = this.currentLang.value;
    const sectionTranslations = this.translations[currentLang][section];
    return (sectionTranslations as any)[key] || key.toString();
  }
}
