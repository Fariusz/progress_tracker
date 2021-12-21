import {EventEmitter, Injectable, Output} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: HttpClient) { }

  login(password: string, username: string ){
    const body = { username: username, password: password };
    return this.http.post('http://localhost:8080/login', body, { observe: 'response'})
      .pipe(
        catchError(errorRes => {
          let errorMessage = 'An unknown error occurred!';
          return throwError(errorMessage + errorRes.error);
        })
      );
  }

  signUp(email: string, password: string, username: string) {
    const body = {email: email, username: username, password: password};
    return this.http.post('http://localhost:8080/register', body)
      .pipe(
        catchError(errorRes => {
          let errorMessage = 'An unknown error occurred!' + errorRes.error;

          if (!errorRes.error) {
            return throwError(errorMessage);
          }

          switch (errorRes.error) {
            case 'EMAIL_EXISTS':
              errorMessage = 'There is an account with that email adress: ' + email;
          }
          switch (errorRes.error) {
            case 'USERNAME_EXISTS':
              errorMessage = 'There is an account with that username: ' + username;
          }
          switch (errorRes.error) {
            case 'UNKNOWN':
              errorMessage = 'UNKNOWN';
          }
          return throwError(errorMessage);
        })
      );
  }
}
