import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  set(key: string, data: any): void {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.log('Error saving to local storage', e);
    }
  }
  get(key: string): any {
    try {
      return JSON.stringify(localStorage.getItem(key));
    } catch (e) {
      console.error('Error getting data from local storage', e);
      return null;
    }
  }
}
