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

  ngOnInit() {
  }

  play(movie) {
    let selected = document.getElementById('carousel__recently-' + movie) 
    selected.classList.add('actived')
    selected.style.display = 'block'
    document.getElementById('close').style.display = 'block'
  }

}
