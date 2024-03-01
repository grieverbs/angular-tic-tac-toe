import { Injectable } from '@angular/core';
import { Game } from './game';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private storageName: string = "game";

  constructor() { }

  setState(data: any) {
    localStorage.setItem(this.storageName, JSON.stringify(data));
  }

  getState() {
    let data = localStorage.getItem(this.storageName);
    if (data) {
      return JSON.parse(data);
    }
    return null;
  }

  clearState() {
    localStorage.removeItem(this.storageName);
  }

  cleanAll() {
    localStorage.clear()
  }
}
