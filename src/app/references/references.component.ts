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
      text: '1234111 3412344 34 12315154345 3453 454',
      author: 'A.Müller',
      role: 'Backend Developer',
    },
    {
      text: 'adrfer vwe vew wv wv vw rvw  vwerwer rvew rwervwert wev wve vwe vwer wve wverewftwertv twervtewrd',
      author: 'A.Müller',
      role: 'Backend Developer',
    },
    {
      text: 'SDVGFS SDFVSD SVF SDVFGSDFGS DVSD FV',
      author: 'A.Müller',
      role: 'Backend Developer',
    },
    {
      text: '234234b2 424324 2 242424234 23',
      author: 'A.Müller',
      role: 'Backend Developer',
    }
  ];

  currentIndex = 0;
  canMoveToNext = true;

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
