import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../services/translation.service';
import { ContactTranslations } from '../types/translation.type';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  constructor(private translationService: TranslationService) {}

  translate(key: keyof ContactTranslations): string {
    return this.translationService.getTranslation('contact', key);
  }
  checkboxChecked = false;

  toggleCheckbox() {
    this.checkboxChecked = !this.checkboxChecked;
    let checkbox = document.getElementById("checkbox");
    if (this.checkboxChecked) {
      checkbox?.classList.add("checkbox-checked");
      checkbox?.classList.remove("checkbox");
    } else {
      checkbox?.classList.remove("checkbox-checked");
      checkbox?.classList.add("checkbox");
    }
  }

}
