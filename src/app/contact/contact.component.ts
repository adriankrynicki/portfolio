import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
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
