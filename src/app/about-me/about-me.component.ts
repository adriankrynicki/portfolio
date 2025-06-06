import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../services/translation.service';
import { AboutMeTranslations } from '../types/translation.type';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  constructor(private translationService: TranslationService) {}

  translate(key: keyof AboutMeTranslations): string {
    return this.translationService.getTranslation('aboutMe', key);
  }
}
