import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { UserService } from '@services/user/user.service';
import { TextInputComponent } from "../../partials/text-input/text-input.component";
import { DefaultButtonComponent } from '@components/partials/default-button/default-button.component';
@Component({
  selector: 'app-login-page',
  imports: [ReactiveFormsModule, CommonModule, TextInputComponent, DefaultButtonComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent implements OnInit {

  loginForm!: FormGroup;
  isSubmitted: boolean = false;
  returnUrl: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

    this.returnUrl = this.activatedRoute.snapshot.queryParams["returnUrl"];
  }

  get fc() {
    return this.loginForm.controls;
  }

  submit() {
    this.isSubmitted = true;
    if(this.loginForm.invalid) {
      console.log("Failed");
      return;
    }
    console.log("Successful");

    this.userService.login({
      email: this.fc["email"].value,
      password: this.fc["password"].value
    }).subscribe(() => {
      this.router.navigateByUrl(this.returnUrl);
    });
  }
}
