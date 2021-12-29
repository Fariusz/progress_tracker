import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth/auth.service";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoginMode: boolean = true;
  isLoading = false;
  error: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSwitchMode(){
    this.authService.isLoginMode ? this.authService.toggleLoginMode(false) : this.authService.toggleLoginMode(true);
  }

  ngOnInit(): void {
    this.authService.changeLoginMode.subscribe(isLoginMode => {this.isLoginMode = isLoginMode;});
  }

  onSubmit(form: NgForm){
    if (!form.valid){
      this.error = "form invalid";
      return;
    }
    const username = form.value.username;
    const password = form.value.password;
    const email = form.value.email;

    let authObs: string | null;

    this.isLoading = true;

    if(this.isLoginMode)
    {
      this.authService.login(username, password).subscribe(
        resp => {
          authObs = resp.headers.get('Authorization');
          console.log(authObs);
          this.error = '';
          this.isLoading = true;
          this.router.navigate(['/home']);
        },
        errorMessage => {
          this.error = errorMessage;
          this.isLoading = false;
        });
    } else {
      this.authService.signUp(email, username, password).subscribe(
        resp => {
          this.isLoading = true;
          this.error = '';
          this.router.navigate(['/auth']);
        },
        errorMessage => {
          this.error = errorMessage;
          this.isLoading = false;
        });
    }
    form.reset();
  }

}
