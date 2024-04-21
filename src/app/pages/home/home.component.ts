import { Component } from '@angular/core';

import { CardModule } from 'primeng/card';
import { SkeletonModule } from 'primeng/skeleton';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardModule, SkeletonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  videos = [];

  ngOnInit(): void {
    this.getVideoList();
  }

  getVideoList(): void {
  }
}
