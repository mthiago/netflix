import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { CarouselComponent } from './component/carousel/carousel.component';

import {BannerService} from './component/banner/banner.service';
import {CarouselService} from './component/carousel/carousel.service'

import { BannerComponent } from './component/banner/banner.component';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { InfosComponent } from './component/infos/infos.component';
import { LoginDetailsComponent } from './component/login-details/login-details.component';
import { LoginOptionsComponent } from './component/login-options/login-options.component';
import { ButtonComponent } from './component/button/button.component';
import { BannerNameComponent } from './component/banner-name/banner-name.component';
import { BannerDetailsComponent } from './component/banner-details/banner-details.component';
import { BannerDescriptionComponent } from './component/banner-description/banner-description.component'
import { ProfileComponent } from './component/profile/profile.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './component/footer/footer.component';
import { PlayerComponent } from './component/player/player.component';
import { InfosService } from './component/infos/infos.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselComponent,
    BannerComponent,
    LoginComponent,
    HomeComponent,
    InfosComponent,
    LoginDetailsComponent,
    LoginOptionsComponent,
    ButtonComponent,
    BannerNameComponent,
    BannerDetailsComponent,
    BannerDescriptionComponent,
    ProfileComponent,
    FooterComponent,
    PlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CarouselService, BannerService, InfosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
