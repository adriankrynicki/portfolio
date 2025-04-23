import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { ProjectDialogComponent } from './project-dialog/project-dialog.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  selectedImage: string = '';
  selectedPosition: 'top' | 'middle' | 'bottom' | null = null;
  isHovered: boolean = false;

  constructor(private dialog: MatDialog) {}

  showImage(imagePath: string, position: 'top' | 'middle' | 'bottom') {
    this.selectedImage = imagePath;
    this.selectedPosition = position;
    this.isHovered = true;
  }

  hideImage() {
    this.isHovered = false;
    setTimeout(() => {
      if (!this.isHovered) {
        this.selectedImage = '';
        this.selectedPosition = null;
      }
    }, 100);
  }

  openProjectDialog(projectName: string) {
    this.dialog.open(ProjectDialogComponent, {
      width: '90vw',
      height: '90vh',
      panelClass: 'custom-dialog',
      data: { projectName }
    });
  }
}
