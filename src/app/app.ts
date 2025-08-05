import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Topbar } from './layout/topbar/topbar';
import { Sidebar } from './layout/sidebar/sidebar';
import { MainLayout } from './layout/main-layout/main-layout';

@Component({
  selector: 'app-root',
  //imports: [RouterOutlet],
  imports: [
    Topbar,
    Sidebar,
    MainLayout

    //RouterOutlet
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('dashboard-app');
}
