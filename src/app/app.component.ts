import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {NgOptimizedImage} from "@angular/common";
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {ContactComponent} from "./contact/contact.component";

@Component({
  // selector: 'app-root',
  selector: 'app-component',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    NgOptimizedImage,
    HomeComponent,
    AboutComponent,
    ContactComponent
  ],
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myPortfolio';
  protected readonly alert = alert;

  constructor(private router: Router) {
  }
}
