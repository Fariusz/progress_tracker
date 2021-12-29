import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {ActivityDto} from "../../models/ActivityDto";
import {AuthService} from "../auth/auth.service";
import {exhaustMap, take} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  private serviceUrl = "http://localhost:8080";

  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  getActivities(){
    return this.authService.user.pipe(
      take(1),
      exhaustMap(user => {
        return this.httpClient.get<ActivityDto[]>(`${this.serviceUrl}/activities`,
          // @ts-ignore
          {headers: new HttpHeaders().set('Authorization' , user.token)});
      })
    )
  }

  getActivity(id: number): Observable<ActivityDto>{
    return this.httpClient.get<ActivityDto>(`${this.serviceUrl}/activities/${id}`);
  }
}
