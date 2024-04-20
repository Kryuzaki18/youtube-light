import { Component } from '@angular/core';

import { SidebarModule } from 'primeng/sidebar';

import { SidebarService } from '@services/sidebar/sidebar.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [SidebarModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  providers:[SidebarService]
})
export class SidebarComponent {
  sidebarVisible: boolean = false;

  constructor(private sidebarService: SidebarService) {
  }

  toggleSidebar(): void {
    this.sidebarService.toggleSidebarVisible();
    this.sidebarVisible = this.sidebarService.isSidebarVisible();
  }
}
