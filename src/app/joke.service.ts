import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {any} from 'codelyzer/util/function';

@Injectable({
  providedIn: 'root'
})
export class JokeService {

  constructor(private  http: HttpClient) {}
    getRandomJoke(): Observable<any> {
      return this.http.get('https://icanhazdadjoke.com/api#fetch-a-random-dad-joke');
  }
}
