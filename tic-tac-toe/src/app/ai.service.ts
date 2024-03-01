import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AiService {
  url: string = "http://localhost:4201/";
  constructor() { }

  async getTest(): Promise<any>{
    return await fetch(this.url + "test");
  }
}
