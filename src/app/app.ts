import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <h1>TMS Client</h1> <!-- This should appear now! -->
    <main>
      <router-outlet />
    </main>
  `
})
export class AppComponent {} // Must be exported as 'AppComponent'