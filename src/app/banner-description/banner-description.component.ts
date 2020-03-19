import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-description',
  templateUrl: './banner-description.component.html',
  styleUrls: ['./banner-description.component.scss']
})
export class BannerDescriptionComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

  play() {
    document.getElementById('close').style.display = 'block'
    let teste = document.getElementById('teste')
    teste.style.display = 'block'
    teste.classList.add('actived')
  }

}
