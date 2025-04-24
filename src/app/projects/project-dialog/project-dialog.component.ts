import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

interface Project {
  id: number;
  name: string;
  description: string;
  image: string;
  technologies: Array<{
    name: string;
    icon: string;
  }>;
  links: {
    github: string;
    live: string;
  };
}

@Component({
  selector: 'app-project-dialog',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './project-dialog.component.html',
  styleUrl: './project-dialog.component.scss',
  host: {
    class: 'mat-mdc-typography'
  }
})
export class ProjectDialogComponent {
  projects: Project[] = [
    {
      id: 1,
      name: 'Join',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      image: 'assets/img/joinImg.png',
      technologies: [
        { name: 'CSS', icon: 'assets/img/cssTurquoise.png' },
        { name: 'HTML', icon: 'assets/img/htmlTurquoise.png' },
        { name: 'Firebase', icon: 'assets/img/firebaseTurquoise.png' },
        { name: 'Angular', icon: 'assets/img/angularTurquoise.png' },
        { name: 'TypeScript', icon: 'assets/img/typeScriptTurquoise.png' }
      ],
      links: {
        github: 'https://github.com/yourusername/join',
        live: 'https://join-demo.com'
      }
    },
    {
      id: 2,
      name: 'El Pollo Loco',
      description: 'A fun Jump-and-Run game based on object-oriented programming with JavaScript.',
      image: 'assets/img/game.png',
      technologies: [
        { name: 'JavaScript', icon: 'assets/img/javaScriptTurquoise.png' },
        { name: 'HTML', icon: 'assets/img/htmlTurquoise.png' },
        { name: 'CSS', icon: 'assets/img/cssTurquoise.png' }
      ],
      links: {
        github: 'https://github.com/yourusername/el-pollo-loco',
        live: 'https://el-pollo-loco-demo.com'
      }
    },
    {
      id: 3,
      name: 'DA Bubble',
      description: 'A Slack-inspired chat application with real-time messaging and channel management.',
      image: 'assets/img/daBubbleImg.png',
      technologies: [
        { name: 'Angular', icon: 'assets/img/angularTurquoise.png' },
        { name: 'TypeScript', icon: 'assets/img/typeScriptTurquoise.png' },
        { name: 'Firebase', icon: 'assets/img/firebaseTurquoise.png' }
      ],
      links: {
        github: 'https://github.com/yourusername/da-bubble',
        live: 'https://da-bubble-demo.com'
      }
    }
  ];

  currentProject!: Project;

  constructor(
    public dialogRef: MatDialogRef<ProjectDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { projectName: string }
  ) {
    this.setCurrentProject(this.data.projectName);
  }

  setCurrentProject(projectName: string) {
    this.currentProject = this.projects.find(p => p.name === projectName) || this.projects[0];
  }

  navigateToNextProject() {
    const currentIndex = this.projects.findIndex(p => p.id === this.currentProject.id);
    const nextIndex = (currentIndex + 1) % this.projects.length;
    this.currentProject = this.projects[nextIndex];
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
