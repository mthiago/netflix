import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  autenticated: Boolean
  email: String
  password: String

  constructor() { }

  ngOnInit() {
    this.autenticated = false
    this.email = 'teste@gmail.com'
    this.password = '123456'
  }

  login(event): Boolean {

    event.preventDefault()
    let target = event.target
    let email = target.querySelector('#email').value
    let password = target.querySelector('#password').value

    if (email === this.email && password === this.password) {
      this.autenticated = true
    }

    console.log(this.autenticated)

    return this.autenticated
  }

}
