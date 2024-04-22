import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { MenuList } from '@constants/menu';
import { Menu, VideoMenu, VideoMenuSelected } from '@models/menu';

import { ThemeService } from '@services/theme/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  providers: [],
})
export class HeaderComponent {
  menu: Menu[] = MenuList;
  selectedVideo: VideoMenuSelected = VideoMenu.Trending;

  constructor(private themeService: ThemeService) {
    this.themeService.toggleTheme();
  }

  isDarkActiveTheme(): boolean {
    return this.themeService.isDarkActiveTheme();
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  selectVideo(item: Menu): void {
    this.selectedVideo = item.name;
  }
}
