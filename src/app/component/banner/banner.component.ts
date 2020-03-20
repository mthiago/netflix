import { Component, OnInit } from '@angular/core';

import {BannerService} from './banner.service'
import {Banner} from './banner.model'

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  banner: Banner[]

  constructor(private bannerService: BannerService) { }

  ngOnInit() {
    this.bannerService.banner()
      .subscribe(banner => this.banner = banner)
  }

}
