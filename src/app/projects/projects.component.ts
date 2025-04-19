import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  selectedImage: string = '';
  selectedPosition: 'top' | 'middle' | 'bottom' | null = null;

  showImage(imagePath: string, position: 'top' | 'middle' | 'bottom') {
    this.selectedImage = imagePath;
    this.selectedPosition = position;
  }

  hideImage() {
    this.selectedImage = '';
    this.selectedPosition = null;
  }
}
