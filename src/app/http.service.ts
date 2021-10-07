import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  configUrl = 'https://api.nasa.gov/planetary/apod?api_key=';
  key = 'rT3gvVh09a68voaKgs6yViQOeW31Pil4HWtHdIsF'

  getConfig() {
    return this.httpService.get(this.configUrl + this.key);
  }

  constructor(private httpService: HttpClient) {

  }
}
