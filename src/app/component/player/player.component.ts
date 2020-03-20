import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  constructor() { }

  @Input() movie: string
  @Input() imagePath: string
  @Input() source: string

  ngOnInit() {
  }

  play(movieCarousel) {
    if (movieCarousel) {
      let selected = document.getElementById('carousel__recently-' + movieCarousel) 
      selected.classList.add('actived')
      selected.style.display = 'block'
      document.getElementById('close').style.display = 'block'
    } else {
      document.getElementById('close').style.display = 'block'
      let banner = document.getElementById('banner-top')
      banner.style.display = 'block'
      banner.classList.add('actived')
    }
  }

}
