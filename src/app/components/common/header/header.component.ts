import { Component } from '@angular/core';
import { SidebarService } from '@services/sidebar/sidebar.service';

import { ThemeService } from '@services/theme/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  providers: [SidebarService],
})
export class HeaderComponent {
  constructor(
    private themeService: ThemeService,
    private sidebarService: SidebarService
  ) {
    this.themeService.toggleTheme();
  }

  isDarkActiveTheme(): boolean {
    return this.themeService.isDarkActiveTheme();
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  toggleSidebar(): void {
    this.sidebarService.toggleSidebarVisible();
  }
}
