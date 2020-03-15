import { Component, OnInit } from '@angular/core';

import {MovieService} from './movie.service'
import {Movie} from './movie.model'

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  movies: Movie[]

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movieService.movies()
      .subscribe(movies => this.movies = movies)
  }

}
