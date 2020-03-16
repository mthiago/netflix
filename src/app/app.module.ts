import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';

import {BannerService} from './banner/banner.service';
import {CarouselService} from './carousel/carousel.service'

import { BannerComponent } from './banner/banner.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { InfosComponent } from './infos/infos.component';
import { LogoComponent } from './logo/logo.component';
import { FirstItemComponent } from './first-item/first-item.component';
import { SecondaryItemComponent } from './secondary-item/secondary-item.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselComponent,
    BannerComponent,
    LoginComponent,
    HomeComponent,
    InfosComponent,
    LogoComponent,
    FirstItemComponent,
    SecondaryItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [CarouselService, BannerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
