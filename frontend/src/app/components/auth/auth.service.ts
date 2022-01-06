import { Injectable, Output } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';
import {throwError, BehaviorSubject, Observable} from 'rxjs';
import {User} from "../../models/User";

export interface LoginCredentials{
  password: string;
  username: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  user = new BehaviorSubject<User>(null);

  isLoginMode: boolean = true;
  @Output() changeLoginMode: BehaviorSubject<boolean> = new BehaviorSubject(this.isLoginMode);

  constructor(private http: HttpClient) {
  }

  toggleLoginMode(trueOrFalse: boolean) {
    this.isLoginMode = trueOrFalse;
    this.changeLoginMode.next(this.isLoginMode);
  }

  login(loginCredentials: LoginCredentials) {
    return this.http.post('http://localhost:8080/login', loginCredentials, {observe: 'response'})
      .pipe(catchError(this.handleError), tap(resData => {
        this.handleAuthentication(
          loginCredentials.username,
          resData.headers.get('Authorization'),
          resData.headers.get('Expires'))}));
  }

  signUp(loginCredentials: LoginCredentials) {
    return this.http.post('http://localhost:8080/register', loginCredentials)
      .pipe(catchError(this.handleError));
  }

  handleAuthentication(username: string, token: string | null, tokenExpirationTime: string | null){
    const user = new User(
      username,
      token,
      new Date(new Date().getTime() + Number(tokenExpirationTime))
    );

    localStorage.setItem('user', JSON.stringify(user));
    this.user.next(user);
  }

  getLoggedUser(){
    return localStorage.getItem('user');
  }

  logout(){
    localStorage.removeItem('user');
  }

  private handleError(errorRes: HttpErrorResponse) {

    let errorMessage = 'An unknown error occurred!';

    if (errorRes.status == 401) {
      return throwError("Wrong username or password.")
    } else if (!errorRes.error || !errorRes.error.message) {
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
