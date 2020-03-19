import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-description',
  templateUrl: './banner-description.component.html',
  styleUrls: ['./banner-description.component.scss']
})
export class BannerDescriptionComponent implements OnInit {

  teste = document.getElementById('teste')

  constructor() {}

  ngOnInit() {
  }

  play() {
    this.teste.style.display = 'block'
  }

}
