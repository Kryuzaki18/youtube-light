import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { Theme, ThemeType } from '@models/theme';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  theme: ThemeType = Theme.LIGHT;
  constructor(@Inject(PLATFORM_ID) private platformId: any) {}

  isDarkActiveTheme(): boolean {
    return this.theme === Theme.DARK;
  }

  toggleTheme(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const theme = this.isDarkActiveTheme() ? Theme.LIGHT : Theme.DARK;

    if (!this.isDarkActiveTheme()) {
      window.document.body.classList.add(`${Theme.DARK}`);
      window.document.body.classList.remove(`${Theme.LIGHT}`);
    } else {
      window.document.body.classList.add(`${Theme.LIGHT}`);
      window.document.body.classList.remove(`${Theme.DARK}`);
    }

    const themeLink = window.document.getElementById('app-theme') as HTMLLinkElement;

    if (themeLink) {
      themeLink.href = `${theme}.css`;
    }

    this.theme = theme;
  }
}
