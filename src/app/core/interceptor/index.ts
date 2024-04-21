import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { YoutubeInterceptor } from './youtube/youtube.interceptor';

/** Array of Http interceptor providers in outside-in order */
export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: YoutubeInterceptor, multi: true },
];