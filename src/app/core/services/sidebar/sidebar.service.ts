import { Injectable, computed, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  private isVisible = signal(false);
  readonly isSidebarVisible = this.isVisible.asReadonly();

  constructor() {}

  toggleSidebarVisible(): void {
    this.isVisible.set(!this.isVisible());
  }
}
