import {Component, OnInit} from '@angular/core';
import {AuthService, LoginCredentials} from "../../auth/auth.service";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {Observable} from "rxjs";
import {HttpResponse} from "@angular/common/http";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginCredentials: LoginCredentials = {
    password: null,
    username: null,
    email: null
  };

  isLoginMode: boolean = true;
  isLoading = false;

  constructor(private authService: AuthService, private router: Router, private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.authService.changeLoginMode.subscribe(isLoginMode => {
      this.isLoginMode = isLoginMode;
    });
  }

  onSwitchMode() {
    this.authService.isLoginMode ? this.authService.toggleLoginMode(false)
      : this.authService.toggleLoginMode(true);
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      /*
            this.showError('Try again', 'Form invalid')
      */
      this.showError('Spróbuj ponownie', 'Błędny formularz')
      return;
    }

    this.loginCredentials.password = form.value.password;
    this.loginCredentials.username = form.value.username;
    this.loginCredentials.email = form.value.email;

    let authObs: Observable<HttpResponse<Object>>;

    this.isLoading = true;

    this.isLoginMode ? authObs = this.authService.login(this.loginCredentials)
      : authObs = this.authService.signUp(this.loginCredentials);

    authObs.subscribe(
      resData => {
        if (this.isLoginMode) {
          this.isLoading = false;
          /*
                    this.showSuccess('Enjoy progress tracking', 'Logged in');
          */
          this.showSuccess('Gratulacje', 'Zalogowano pomyślnie');
          this.router.navigate(['/home']);
        } else {
          this.isLoading = false;
          this.authService.toggleLoginMode(true);
          this.router.navigate(['/login']);
          /*
                    this.showSuccess('Proceed to login', 'Register success');
          */
          this.showSuccess('Przejdź do logowania', 'Konto zostało zarejestrowane');
        }
      },
      errorMessage => {
        /*
                this.showError('Please check your email', errorMessage);
        */
        this.showError('Błędne dane logowania', errorMessage);
        this.isLoading = false;
      }
    );
    form.reset();
  }

  showSuccess(message: string, title: string) {
    this.toastr.success(message, title);
  }

  showError(message: string, title: string) {
    this.toastr.error(message, title);
  }
}
