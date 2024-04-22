import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

import { apiUrl } from '@constants/youtube-data-api-v3';
import { HttpService } from '@services/http/http.service';
import { Video } from '@models/videos';

@Injectable({
  providedIn: 'root',
})
export class VideosService {
  constructor(private httpService: HttpService) {}

  getVideosByPopular(maxResults: number = 10): Observable<Video> {
    const data = {
      part: 'snippet, player, status, statistics',
      chart: 'mostPopular',
      regionCode: 'ph',
      maxResults,
    };

    return this.httpService.get$(apiUrl.videos, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  getVideosForChannel(
    channelId: string,
    maxResults: number = 10
  ): Observable<Object> {
    const data = {
      channelId,
      part: 'snippet',
      maxResults,
    };

    return this.httpService.get$(apiUrl.videos, data).pipe(
      map((res) => {
        return res;
      })
    );
  }
}
