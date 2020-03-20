import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  loginForm: any
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

  constructor(private router: Router, private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email: '',
      password: ''
    })
   }

  ngOnInit() {
    this.email = 'teste@gmail.com'
    this.password = '123456'
  }

  login(formData: any) {
    let email = formData.email
    let password = formData.password

    if (email === this.email && password === this.password) {
      this.router.navigate(['home'])
    }
  }

}
