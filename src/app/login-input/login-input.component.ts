import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-login-input',
  templateUrl: './login-input.component.html',
  styleUrls: ['./login-input.component.scss']
})
export class LoginInputComponent implements OnInit {

  @Input() input: any = []

  constructor() { }

  ngOnInit() {
  }

}
