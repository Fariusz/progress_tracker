import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class LoginService implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  login() {
    const body = { username: 'test', password: 'test' };
    this.http.post('http://localhost:8080/login', body, { observe: 'response'})
      .subscribe(resp => console.log(resp.headers.get('Authorization')));
  }
}
