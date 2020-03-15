import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { MovieComponent } from './movie/movie.component';

import {MovieService} from './movie/movie.service';
import {BannerService} from './banner/banner.service';

import { BannerComponent } from './banner/banner.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselComponent,
    MovieComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [MovieService, BannerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
