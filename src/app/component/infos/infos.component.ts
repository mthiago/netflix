import { Component, OnInit } from '@angular/core';

import { InfosService } from './infos.service'

import { Country } from './../../model/country.model'
import { View } from './../../model/view.model'
import { Kind } from './../../model/Kind.model'

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.scss']
})
export class InfosComponent implements OnInit {

  constructor(private infosService: InfosService) { }

  country: Country[]
  view: View[]
  kind: Kind[]

  ngOnInit() {
    this.topMovies()
    this.topUsers()
    this.topViews()
  }

  topMovies() {
    this.infosService.topMovies()
      .subscribe(res => this.country = res)
  }

  topUsers() {
    this.infosService.topUsers()
      .subscribe(res => this.view = res)
  }

  topViews() {
    this.infosService.topViews()
      .subscribe(res => this.kind = res)
  }

}
