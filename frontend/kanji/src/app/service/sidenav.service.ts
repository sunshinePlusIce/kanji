import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {
  open: boolean = false;
  constructor() { }

  set(v: boolean): void {
    this.open = v;
  }

  get(): boolean {
    return this.open;
  }
}
