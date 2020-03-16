import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-first-item',
  templateUrl: './first-item.component.html',
  styleUrls: ['./first-item.component.scss']
})
export class FirstItemComponent implements OnInit {

  @Input() item: string[] = []

  constructor() { }

  ngOnInit() {
  }

}
