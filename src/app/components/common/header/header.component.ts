import { Component } from '@angular/core';
import { ThemeService } from '@services/theme/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  providers: [],
})
export class HeaderComponent {
  constructor(
    private themeService: ThemeService,
  ) {
    this.themeService.toggleTheme();
  }

  isDarkActiveTheme(): boolean {
    return this.themeService.isDarkActiveTheme();
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}
