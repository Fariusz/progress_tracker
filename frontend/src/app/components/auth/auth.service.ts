import { Injectable, Output } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { throwError, BehaviorSubject } from 'rxjs';
import {User} from "../../models/User";

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  // @ts-ignore
  user = new BehaviorSubject<User>(null);

  isLoginMode: boolean = true;
  @Output() changeLoginMode: BehaviorSubject<boolean> = new BehaviorSubject(this.isLoginMode);

  constructor(private http: HttpClient) {
  }

  toggleLoginMode(trueOrFalse: boolean) {
    this.isLoginMode = trueOrFalse;
    this.changeLoginMode.next(this.isLoginMode);
  }

  login(password: string, username: string) {
    const body = {username: username, password: password};
    return this.http.post('http://localhost:8080/login', body, {observe: 'response'})
      .pipe(catchError(this.handleError), tap(resData => {
        this.handleAuthentication(username, resData.headers.get('Authorization'), resData.headers.get('Expires'))}));
  }

  signUp(email: string, password: string, username: string) {
    const body = {email: email, username: username, password: password};
    return this.http.post('http://localhost:8080/register', body)
      .pipe(catchError(this.handleError), tap(resData => {
        console.log(resData);
      }));
  }

  handleAuthentication(username: string, token: string | null, tokenExpirationTime: string | null){
    const user = new User(
      username,
      token,
      new Date(new Date().getTime() + Number(tokenExpirationTime))
    );
    this.user.next(user);
    console.log(user);
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
