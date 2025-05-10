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
    {
      text: 'Another great feedback...',
      author: 'A.Müller',
      role: 'Backend Developer',
    },
    {
      text: 'Another great feedback...',
      author: 'A.Müller',
      role: 'Backend Developer',
    },
    {
      text: 'Another great feedback...',
      author: 'A.Müller',
      role: 'Backend Developer',
    },
        {
      text: 'Another great feedback...',
      author: 'A.Müller',
      role: 'Backend Developer',
    },
    {
      text: 'Another great feedback...',
      author: 'A.Müller',
      role: 'Backend Developer',
    },
  ];

  currentIndex = 0;


  goLeft() {
    this.currentIndex =
      (this.currentIndex - 1 + this.testimonials.length) %
      this.testimonials.length;
  }
  goRight() {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
  }

  getTransform(index: number): string {
    // -1: links, 0: mitte, 1: rechts, Rest: außerhalb
    let pos = index - this.currentIndex;
    // Für Endlos-Loop:
    if (pos < -2) pos += this.testimonials.length;
    if (pos > 2) pos -= this.testimonials.length;
    return `translateX(${pos * 100}%)`;
  }

  getRelativePosition(index: number): number {
    let pos = index - this.currentIndex;
    if (pos < -2) pos += this.testimonials.length;
    if (pos > 2) pos -= this.testimonials.length;
    return pos;
  }
}
