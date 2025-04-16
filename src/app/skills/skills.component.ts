import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../services/translation.service';
import { SkillsTranslations } from '../types/translation.type';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  constructor(private translationService: TranslationService) {}  

  translate(key: keyof SkillsTranslations): string {
    return this.translationService.getTranslation('skills', key);
  }
}
