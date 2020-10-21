import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { AuthenticationService } from '../services/authentication.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  returnUrl: string;
  displayMessage: string = '';
  successMessage: boolean = false;
  failureMessage: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private userService: UserService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });

  if (this.userService.getregisterationStatus() == "success") {
    this.successMessage = true;
    this.displayMessage = "User registeration successful";
    this.userService.setregisterationStatus('');
  }
  else if (this.userService.getregisterationStatus() == "failure") {
    this.failureMessage = true;
    this.displayMessage = "User registeration failed. Retry to register.";
    this.userService.setregisterationStatus('');
  }

  // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenient getter for easy access to form fields
  get f() { 
    return this.loginForm.controls; 
  }

  onSubmit() {
    this.submitted = true;

    this.displayMessage = null;
    this.successMessage = false;
    this.failureMessage = false;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }

    this.authenticationService.login(this.loginForm.value)
      .pipe(first())
      .subscribe(
        res => {
          // improve this  
          if (res.data) {
            localStorage.setItem('userId', res.data._id);
            localStorage.setItem('token', res.token);
            this.router.navigate([this.returnUrl]);
          }
          if(!res.data) {
            this.failureMessage = true;
            this.displayMessage = "Unable to login. Check username and password";
          }
        },
        error => {
          console.log(error);
        }
      );
  }

}