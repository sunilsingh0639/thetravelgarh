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
@Component({
  selector: 'app-admin-login',
  imports: [ReactiveFormsModule, NgIf, ToastModule, Toast, ButtonModule, NgxSpinnerModule, FormsModule, CommonModule],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.scss'
})
export class AdminLoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private _fb: FormBuilder, private messageService: MessageService, private _spinner: NgxSpinnerService,) { }

  ngOnInit(): void {
    this.initilizeLoginForm();
  }
  showSpinner() {
    this._spinner.show();
    // Hide spinner after 3 seconds
    setTimeout(() => {
      this._spinner.hide();
    }, 3000);
  }
  initilizeLoginForm() {
    this.loginForm = this._fb.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }
  get userName() {
    return this.loginForm.controls['userName']
  }
  get password() {
    return this.loginForm.controls['password']
  }
  submit() {
    this._spinner.show()
    // this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Message Content', life: 3000 });

    if (!this.loginForm.valid) {
      this.loginForm.markAllAsTouched();
    }
    if (this.loginForm.valid) {
      if (this.loginForm.controls['userName'].value == "sunilsingh" || this.loginForm.controls['password'].value == "Sunil@123") {
        alert('success');
      }
      if (this.loginForm.controls['userName'].value !== "sunilsingh" || this.loginForm.controls['password'].value !== "Sunil@123") {
        alert('invalid user name or password');
      }
    }
    console.log(this.loginForm.value);

  }
}
