import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-secondary-item',
  templateUrl: './secondary-item.component.html',
  styleUrls: ['./secondary-item.component.scss']
})
export class SecondaryItemComponent implements OnInit {

  @Input() icon: string[] = []

  constructor() { }

  ngOnInit() {
  }

}
