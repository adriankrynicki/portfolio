import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../services/translation.service';
import { Language } from '../types/translation.type';
import { HeroTranslations } from '../types/translation.type';
import { CursorGlowService } from '../services/cursor_glow.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})

export class HeroComponent implements AfterViewInit, OnDestroy {
  @ViewChild('scrollWrapper') scrollWrapper!: ElementRef;
  @ViewChild('scrollContent') scrollContent!: ElementRef;
  @ViewChild('cursorGlow') cursorGlow!: ElementRef;
  private animationFrameId: number = 0;
  private scrollPosition: number = 0;
  private readonly scrollSpeed: number = 3; // Pixels pro Frame

  constructor(
    public translationService: TranslationService,
    private cursorGlowService: CursorGlowService
  ) {}

  ngAfterViewInit() {
    this.startScrollAnimation();
    this.cursorGlowService.initializeCursor(this.cursorGlow);
  }

  ngOnDestroy() {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
    this.cursorGlowService.cleanup();
  }

  private startScrollAnimation() {
    const animate = () => {
      const wrapperElement = this.scrollWrapper.nativeElement;
      const contentWidth = this.scrollContent.nativeElement.offsetWidth;

      this.scrollPosition -= this.scrollSpeed;

      if (Math.abs(this.scrollPosition) >= contentWidth) {
        // Zurück zum Start, aber um die Breite eines Content-Blocks verschoben
        this.scrollPosition += contentWidth;
      }

      wrapperElement.style.transform = `translateX(${this.scrollPosition}px)`;
      this.animationFrameId = requestAnimationFrame(animate);
    };

    this.animationFrameId = requestAnimationFrame(animate);
  }

  toggleLanguage(lang: Language) {
    this.translationService.setLanguage(lang);
  }

  translate(key: keyof HeroTranslations): string {
    return this.translationService.getTranslation('hero', key);
  }

  scrollToAboutMe() {
    const aboutMeElement = document.getElementById('about');
    if (aboutMeElement) {
      aboutMeElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
