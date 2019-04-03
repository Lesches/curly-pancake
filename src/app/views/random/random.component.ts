import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {JokeService} from '../../joke.service';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.scss']
})
export class RandomComponent implements OnInit {
  // initiationg the URL to the joke API
  jokeUrl: string;

  constructor(private jokeFetcher: JokeService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.jokeFetcher.getRandomJoke().subscribe(
      (result) => {
        this.jokeUrl = result.message;
        console.log(result);
      }
    );
  }

}
