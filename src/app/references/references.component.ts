import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

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
      text: 'Lukas has proven to be a reliable group partner...',
      author: 'H.Janisch',
      role: 'Team Partner',
    },
    {
      text: 'I had the good fortune of working with Lukas...',
      author: 'T.Schulz',
      role: 'Frontend Developer',
    },
    {
      text: 'Another great feedback...',
      author: 'A.Müller',
      role: 'Backend Developer',
    },
    // Füge hier weitere Testimonials hinzu
  ];

  currentIndex = 0;

  get leftIndex() {
    return (
      (this.currentIndex - 1 + this.testimonials.length) %
      this.testimonials.length
    );
  }
  get rightIndex() {
    return (this.currentIndex + 1) % this.testimonials.length;
  }

  goLeft() {
    this.currentIndex =
      (this.currentIndex - 1 + this.testimonials.length) %
      this.testimonials.length;
  }

  goRight() {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
  }
}
