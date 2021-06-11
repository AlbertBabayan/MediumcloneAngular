import { Injectable } from '@angular/core';

@Injectable()
export class PersistanceService {

  constructor() { }

  getToken(key: string) {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (error) {
      console.error('localStorage getting token', error);
      return null;
    }
  }
  setToken(key: string, data: any) {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      console.error('localStorage saving token', error);
    }
  }
}
