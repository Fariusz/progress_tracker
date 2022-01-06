import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {ActivityDto} from "../../models/ActivityDto";
import {AuthService} from "../auth/auth.service";
import {exhaustMap, map, take} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  private serviceUrl = "http://localhost:8080";

  constructor(private httpClient: HttpClient) { }

  getActivities(){
        return this.httpClient
          .get<ActivityDto[]>(
            `${this.serviceUrl}/activities`
          );/*.pipe(
            map(activites => {
              return activites.map(activity => {
                return {
                  ...activity
                }
              })
            })
          );*/
  }

  getActivity(id: number): Observable<ActivityDto>{
    return this.httpClient.get<ActivityDto>(`${this.serviceUrl}/activities/${id}`);
  }
}
