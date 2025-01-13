import { CommonModule, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { Toast } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { Ripple } from 'primeng/ripple';
import { NgxSpinnerService } from 'ngx-spinner';
import { NgxSpinnerModule } from "ngx-spinner";
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-login',
  imports: [ReactiveFormsModule, ToastModule, ButtonModule, NgxSpinnerModule, FormsModule, CommonModule],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.scss'
})
export class AdminLoginComponent implements OnInit {
  loginForm!: FormGroup;
  showPassword: boolean = false;
  passwordFieldType: 'password' | 'text' = 'password';

  constructor(private _fb: FormBuilder, private messageService: MessageService,
    private _spinner: NgxSpinnerService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this._fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  signIn(): void {
    const { email, password } = this.loginForm.value;
    if (this.loginForm.controls['email'].value == "any101t5@gmail.com" && this.loginForm.controls['password'].value == "12345") {
      console.log('Login successful');
      this.router.navigate(['']);
    } else {
      console.error('Login error');
      alert('Invalid credentials! \n \n Please Enter These Credential \n Username: any101t5@gmail.com \n Password: 12345')
    }
  }

  togglePasswordVisibility(): void {
    this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
  }
}
