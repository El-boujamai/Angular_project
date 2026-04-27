import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [ RouterOutlet,
                RouterLink,
                NgFor],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone:true
})
export class App {
  protected readonly title = signal('ang_project');
}
