import { Component, OnInit } from '@angular/core';

import {MovieService} from './movie.service'
import {Movie} from './movie.model'

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  populares: Movie[]
  emAlta: Movie[]

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.getPopulares()
    this.getEmAlta()
  }

  getPopulares() {
    this.movieService.getPopulares()
    .subscribe(res => this.populares = res)
  }

  getEmAlta() {
    this.movieService.getEmAlta()
    .subscribe(res => this.emAlta = res)
  }

}
