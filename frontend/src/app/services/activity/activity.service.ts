import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ActivityDto} from "../../models/ActivityDto";

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  private serviceUrl = "http://localhost:8080";

  constructor(private httpClient: HttpClient) { }

  getActivities(): Observable<ActivityDto[]>{
    return this.httpClient.get<ActivityDto[]>(`${this.serviceUrl}/activities`);
  }

  getActivity(id: number): Observable<ActivityDto>{
    return this.httpClient.get<ActivityDto>(`${this.serviceUrl}/activities/${id}`);
  }
}
