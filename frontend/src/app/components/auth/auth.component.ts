import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "../../services/auth/auth.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  isLoginMode: boolean = false;
  isLoading = false;
  error: string = '';

  constructor(private authService: AuthService) {}

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
          this.isLoading = true;
        },
        errorMessage => {
          this.error = errorMessage;
          this.isLoading = false;
        });
    } else {
      this.authService.signUp(email, username, password).subscribe(
        resp => {
          this.isLoading = true;
        },
        errorMessage => {
          this.error = errorMessage;
          this.isLoading = false;
        });
    }
    form.reset();
  }
}
