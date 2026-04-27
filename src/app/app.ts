import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
// import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [ RouterOutlet,
                RouterLink
                ],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone:true
})
export class App {
  protected readonly title = signal('ang_project');
}
