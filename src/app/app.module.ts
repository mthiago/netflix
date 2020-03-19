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
import { SecondaryItemComponent } from './secondary-item/secondary-item.component';
import { LoginDetailsComponent } from './login-details/login-details.component';
import { LoginOptionsComponent } from './login-options/login-options.component';
import { ButtonComponent } from './button/button.component';
import { LoginInputComponent } from './login-input/login-input.component';
import { BannerNameComponent } from './banner-name/banner-name.component';
import { BannerDetailsComponent } from './banner-details/banner-details.component';
import { BannerDescriptionComponent } from './banner-description/banner-description.component'
import { ProfileComponent } from './profile/profile.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { PlayerComponent } from './player/player.component';

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
    SecondaryItemComponent,
    LoginDetailsComponent,
    LoginOptionsComponent,
    ButtonComponent,
    LoginInputComponent,
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
  providers: [CarouselService, BannerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
