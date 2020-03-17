import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string
  password: string

  page: string = 'login'

  inputEmail: any = [
    {
      'id': 'email',
      'placeholder': 'Email ou número de telefone'
    } 
  ]
  inputPassword: any = [
    {
      'id': 'password',
      'placeholder': 'Senha'
    }
  ]

  constructor(private router: Router) { }

  ngOnInit() {
    this.email = 'teste@gmail.com'
    this.password = '123456'
  }

  login(event) {

    event.preventDefault()
    let target = event.target
    let email = target.querySelector('#email').value
    let password = target.querySelector('#password').value

    if (email === this.email && password === this.password) {
      this.router.navigate(['home'])
    }

  }

}
