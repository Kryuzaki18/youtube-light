import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

import { apiBaseUrl } from '@constants/youtube-data-api-v3';
import { HttpService } from '@services/http/http.service';

@Injectable({
  providedIn: 'root'
})
export class VideosService {

  constructor(private httpService: HttpService) { }

  getVideosForChanel(channelId: string, maxResults: number = 10): Observable<Object> {
    const params = {
      channelId,
      order: 'date',
      part: 'snippet',
      type: 'video,id',
      maxResults
    }
    let url = `${apiBaseUrl}`;
    return this.httpService.get(url)
      .pipe(map((res) => {
        return res;
      }))
  }
}
