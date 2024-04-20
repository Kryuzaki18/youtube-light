import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  constructor(@Inject(PLATFORM_ID) private platformId: any) {}

  setLocalStorage(key: string, value: any): void {
    try {
      if (this.isPlatformBrowser()) {
        const serializedValue = JSON.stringify(value);
        window.localStorage.setItem(key, serializedValue);
      }
    } catch (error) {
      console.error(`Unable to set item: ${error}`);
    }
  }

  getLocalStorage<T>(key: string): T | null {
    try {
      if (!this.isPlatformBrowser()) {
        return null;
      }

      const item = window.localStorage.getItem(key);
      if (item === null) {
        return null;
      }

      return JSON.parse(item) as T;
    } catch (error) {
      console.error(`Unable to get item: ${error}`);
      return null;
    }
  }

  removeLocalStorage(key: string): void {
    try {
      if (this.isPlatformBrowser()) {
        window.localStorage.removeItem(key);
      }
    } catch (error) {
      console.error(`Unable to remove item: ${error}`);
    }
  }

  private isPlatformBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }
}
