import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor() {
  }
    protected readonly alert = alert;

  url = 'https://drive.google.com/file/d/1UXtZGFrMBxTNLAiJIFCOM4eNif_Wo1hM/view?usp=drive_link';
  downloadResume() {
    window.open('https://drive.google.com/file/d/1UXtZGFrMBxTNLAiJIFCOM4eNif_Wo1hM/view?usp=drive_link', '_blank');
  }
}
