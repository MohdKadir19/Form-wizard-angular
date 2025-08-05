import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Topbar } from '../topbar/topbar';
import { Sidebar } from '../sidebar/sidebar';
import { CommonModule } from '@angular/common';
import { FormWizard } from '../../form-wizard/form-wizard';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, Topbar, Sidebar, CommonModule, FormWizard],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss'
})
export class MainLayout {

}
