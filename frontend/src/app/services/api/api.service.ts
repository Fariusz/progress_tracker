import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ActivityDto} from "../../models/ActivityDto";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    return this.http.post('http://localhost:8080/login', { password, username });
  }

  getActivities(): Observable<ActivityDto[]> {
    return this.http.get<ActivityDto[]>('activities', {
      headers: {},
    });
  }
}
