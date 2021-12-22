import { Injectable, Output} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {BehaviorSubject, Subject, throwError} from 'rxjs';
import {User} from "../../models/User";

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  user = new Subject<User>();

  isLoginMode: boolean = false;
  @Output() changeLoginMode: BehaviorSubject<boolean> = new BehaviorSubject(this.isLoginMode);

  constructor(private http: HttpClient) {}

  toggleLoginModeToTrue() {
    this.isLoginMode = true;
    this.changeLoginMode.next(this.isLoginMode);
  }

  toggleLoginModeToFalse() {
    this.isLoginMode = false;
    this.changeLoginMode.next(this.isLoginMode);
  }

  login(password: string, username: string) {
    const body = {username: username, password: password};
    return this.http.post('http://localhost:8080/login', body, {observe: 'response'})
      .pipe(catchError(this.handleError));
  }

  signUp(email: string, password: string, username: string) {
    const body = {email: email, username: username, password: password};
    return this.http.post('http://localhost:8080/register', body)
      .pipe(catchError(this.handleError));
  }

  private handleError(errorRes: HttpErrorResponse){

    let errorMessage = 'An unknown error occurred!';

    if (errorRes.status == 401){
      return throwError("Wrong username or password.")
    }

    else if(!errorRes.error || !errorRes.error.message){
      return throwError(errorMessage);
    }

    switch (errorRes.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'There is an account with that email adress.';
        break;
    }

    switch (errorRes.error.message) {
      case 'USERNAME_EXISTS':
        errorMessage = 'There is an account with that username.';
        break;
    }

    switch (errorRes.error.message) {
      case 'UNKNOWN':
        errorMessage = 'UNKNOWN';
        break;
    }

    return throwError(errorMessage);
  }
}
