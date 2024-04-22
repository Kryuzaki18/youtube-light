import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(public http: HttpClient) {}

  get$(url: string, data: Object, options?: any): Observable<Object> {
    let newUrl = url;

    if (!this.isEmptyObject(data)) {
      const newQueryString = this.queryString(data);
      newUrl = `${url}?${newQueryString}`;
    }

    return this.http.get(newUrl, options).pipe(
      map((res) => {
        return res;
      })
    );
  }

  post$(url: string, data: Object, options?: any) {
    return this.http.post(url, data, options).pipe(
      map((res) => {
        return res;
      })
    );
  }

  put$(url: string, data: any, options?: any) {
    return this.http.put(url, data, options).pipe(
      map((res) => {
        return res;
      })
    );
  }

  delete$(url: string, options?: any) {
    return this.http.delete(url, options).pipe(
      map((res) => {
        return res;
      })
    );
  }

  private queryString(params: Object): string {
    let newQueryString: string = '';
    Object.entries(params).map(([type, value]) => {
      newQueryString += `${type}=${value}&`;
    });
    return newQueryString
  }

  private isEmptyObject(obj: Object): boolean {
    return Object.keys(obj).length === 0;
  }
}
