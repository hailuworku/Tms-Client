import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet], 
  template: `
    <h1>TMS Client</h1>
    <main>
      <router-outlet></router-outlet> <!-- ራውተሩ ብቻ ዳታ እንዲያመጣ -->
    </main>
  `
})
export class AppComponent {}