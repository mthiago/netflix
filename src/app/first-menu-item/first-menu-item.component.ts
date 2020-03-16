import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-first-menu-item',
  templateUrl: './first-menu-item.component.html',
  styleUrls: ['./first-menu-item.component.scss']
})
export class FirstMenuItemComponent implements OnInit {

  @Input() item: string[] = []

  constructor() { }

  ngOnInit() {
  }

}
