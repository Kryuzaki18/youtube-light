import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { apiKey } from '@constants/youtube-data-api-v3';

@Injectable()
export class YoutubeInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const method = request.method;
    let keyReq = request.clone();

    if (method === 'GET') {
      keyReq = request.clone({
        url: `${request.url}key=${apiKey}`
      });
    } else if (method === 'POST') {
      keyReq = request.clone({
        headers: request.headers.set('key', apiKey),
      });
    }
    return next.handle(keyReq);
  }
}
