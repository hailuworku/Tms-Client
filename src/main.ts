import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component'; // 1. Change 'App' to 'AppComponent'

bootstrapApplication(AppComponent, appConfig) // 2. Change 'App' to 'AppComponent'
  .catch((err) => console.error(err));