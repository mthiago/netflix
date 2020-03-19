import { Component, OnInit } from '@angular/core';

import {CarouselService} from './carousel.service'
import {Carousel} from './carousel.model'
import { url } from 'inspector';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  carousel: Carousel[]

  constructor(private carouselService: CarouselService) { }

  ngOnInit() {
    this.carouselService.carousel()
    .subscribe(res => this.carousel = res)
  }

  play(movie) {
    document.getElementById('carousel__recently-' + movie).style.display = 'block'
  }

}