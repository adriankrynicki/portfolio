import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { ProjectDialogComponent } from './project-dialog/project-dialog.component';
import { TranslationService } from '../services/translation.service';
import { ProjectsTranslations } from '../types/translation.type';
import { CursorGlowService } from '../services/cursor_glow.service';

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

  constructor(
    private dialog: MatDialog,
    private translationService: TranslationService,
    private cursorGlowService: CursorGlowService
  ) {}

  translate(section: 'projects', key: keyof ProjectsTranslations): string {
    return this.translationService.getTranslation(section, key);
  }

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
    const dialogRef = this.dialog.open(ProjectDialogComponent, {
      width: '90vw',
      height: '90vh',
      panelClass: 'custom-dialog',
      data: { projectName }
    });

    // Nach dem Schließen des Dialogs den Cursor-Glow neu initialisieren
    dialogRef.afterClosed().subscribe(() => {
      // Kurze Verzögerung, um sicherzustellen, dass der Dialog vollständig geschlossen ist
      setTimeout(() => {
        const heroGlow = document.querySelector('.cursor-glow') as HTMLElement;
        if (heroGlow) {
          this.cursorGlowService.initializeCursor({ nativeElement: heroGlow } as ElementRef);
        }
      }, 100);
    });
  }
}
