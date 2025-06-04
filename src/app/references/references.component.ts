import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../services/translation.service';
import { ReferencesTranslations } from '../types/translation.type';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss',
})
export class ReferencesComponent {
  testimonials = [
    {
      text_en: "Working with Lukas was a real pleasure. His attention to detail and willingness to help others made every project run smoothly. I would gladly collaborate with him again.",
      text_de: "Die Zusammenarbeit mit Lukas war eine echte Freude. Seine Liebe zum Detail und seine Hilfsbereitschaft haben jedes Projekt reibungslos gemacht. Ich würde jederzeit wieder mit ihm arbeiten.",
      author: "H. Janisch",
      role: "Team Partner",
    },
    {
      text_en: "Lukas is a true team player.",
      text_de: "Lukas ist ein echter Teamplayer.",
      author: "T. Schulz",
      role: "Frontend Developer",
    },
    {
      text_en: "His technical skills are impressive, but what really stands out is his positive attitude and ability to motivate the team, even in challenging situations.",
      text_de: "Seine technischen Fähigkeiten sind beeindruckend, aber besonders hervorzuheben ist seine positive Einstellung und die Fähigkeit, das Team auch in schwierigen Situationen zu motivieren.",
      author: "A. Müller",
      role: "Backend Developer",
    },
    {
      text_en: "Always reliable and quick to find solutions.",
      text_de: "Immer zuverlässig und schnell in der Lösungsfindung.",
      author: "S. Becker",
      role: "Project Manager",
    },
    {
      text_en: "Lukas contributed many creative ideas to our project and was always open to feedback. His code quality is excellent.",
      text_de: "Lukas hat viele kreative Ideen in unser Projekt eingebracht und war immer offen für Feedback. Seine Codequalität ist ausgezeichnet.",
      author: "M. Schneider",
      role: "Fullstack Developer",
    },
    {
      text_en: "Great communication and strong commitment.",
      text_de: "Großartige Kommunikation und starkes Engagement.",
      author: "J. Fischer",
      role: "UX Designer",
    }
  ];

  constructor(private translationService: TranslationService) {
    this.translationService.currentLang$.subscribe((lang) => {
      this.currentLang = lang;
    });
  }

  translate(key: keyof ReferencesTranslations): string {
    return this.translationService.getTranslation('references', key);
  }

  currentLang: string = 'en';
  currentIndex = 0;
  canMoveToNext = true;

  public getTestimonialText(testimonial: any): string {
    return testimonial['text_' + this.currentLang];
  }

  private calculateShortestPath(currentIndex: number, targetIndex: number): number {
    const totalItems = this.testimonials.length;
    let difference = targetIndex - currentIndex;
    
    if (Math.abs(difference) > totalItems / 2) {
      difference = difference > 0 ? difference - totalItems : difference + totalItems;
    }
    
    return difference;
  }

  private executeAnimation(steps: number, direction: number): void {
    let currentStep = 0;
    const totalItems = this.testimonials.length;
    
    const animateStep = () => {
      if (currentStep < steps) {
        this.currentIndex = (this.currentIndex + direction + totalItems) % totalItems;
        currentStep++;
        setTimeout(animateStep, 700 / steps);
      } else {
        this.canMoveToNext = true;
      }
    };
    
    animateStep();
  }

  public goToIndex(targetIndex: number): void {
    if (!this.canMoveToNext) return;
    
    const difference = this.calculateShortestPath(this.currentIndex, targetIndex);
    const steps = Math.abs(difference);
    const direction = difference > 0 ? 1 : -1;
    
    this.canMoveToNext = false;
    this.executeAnimation(steps, direction);
  }

  public goLeft(): void {
    if (this.canMoveToNext) {
      this.currentIndex =
      (this.currentIndex - 1 + this.testimonials.length) %
      this.testimonials.length;
      this.canMoveToNext = false;
      setTimeout(() => {
        this.canMoveToNext = true;
      }, 700);
    }
  }

  public goRight(): void {
    if (this.canMoveToNext) {
      this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
      this.canMoveToNext = false;
      setTimeout(() => {
        this.canMoveToNext = true;
      }, 700);
    }
  }

  public getTransform(index: number): string {
    let pos = index - this.currentIndex;
    if (pos < -2) pos += this.testimonials.length;
    if (pos > 2) pos -= this.testimonials.length;
    return `translateX(${pos * 100}%)`;
  }

  public getRelativePosition(index: number): number {
    let pos = index - this.currentIndex;
    if (pos < -2) pos += this.testimonials.length;
    if (pos > 2) pos -= this.testimonials.length;
    return pos;
  }
}
