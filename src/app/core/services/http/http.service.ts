import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(public http: HttpClient) {}

  get(url: any): Observable<Object> {
    return this.http.get(url).pipe(
      map((res) => {
        return res;
      })
    );
  }
}
