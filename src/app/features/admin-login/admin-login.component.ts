import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-login',
  imports: [ReactiveFormsModule],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.scss'
})
export class AdminLoginComponent implements OnInit{
  loginForm! : FormGroup;

  constructor (private _fb : FormBuilder) {}

  ngOnInit(): void {
    this.initilizeLoginForm();
  }

  initilizeLoginForm() {
    this.loginForm = this._fb.group({
      userName : ['', [Validators.required]],
      password : ['', [Validators.required]]
    })
  }

  submit() {
    console.log(this.loginForm.value);
    
  }
}
