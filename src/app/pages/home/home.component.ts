import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Subject, takeUntil } from 'rxjs';

import { CardModule } from 'primeng/card';
import { SkeletonModule } from 'primeng/skeleton';

import { Video } from '@models/videos';
import { VideosService } from '@services/youtube-data-api-v3/videos/videos.service';

import { ShortNumberPipe } from 'app/core/pipes/short-number/short-number.pipe';
import { TimeAgoPipe } from 'app/core/pipes/time-ago/time-ago.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CardModule,
    SkeletonModule,
    ShortNumberPipe,
    TimeAgoPipe,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: [VideosService],
})
export class HomeComponent {
  video: Video = {};

  private unsubscribe$: Subject<void> = new Subject();

  constructor(
    private videosService: VideosService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.getVideoList();
  }

  getVideoList(): void {
    this.videosService
      .getVideosByPopular()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((data: Video) => {
        this.video = data;
      });
  }

  bypassSecurityTrustHtml(embedHtml: string) {
    return embedHtml ? this.sanitizer.bypassSecurityTrustHtml(embedHtml) : '';
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
