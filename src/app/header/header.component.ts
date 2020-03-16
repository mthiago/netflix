import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  page: string = 'home'
  item: string[] = ['Início', 'Séries', 'Filmes', 'Mais recentes', 'Minha lista']
  icon: string[] = ['search', 'card_giftcard', 'notification_important', 'account_circle']

  constructor() { }

  ngOnInit() {
  }

}
