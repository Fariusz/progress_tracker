import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ActivityDto} from "../../../models/ActivityDto";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {

  constructor(private httpClient: HttpClient) {
  }

  getActivities(): Observable<ActivityDto[]> {
    return this.httpClient.get<ActivityDto[]>(`${environment.APIEndpoint}/userActivities`);
  }

  getActivitiesByListId(id: bigint): Observable<ActivityDto[]> {
    return this.httpClient.get<ActivityDto[]>(`${environment.APIEndpoint}/userActivitiesByListId/${id}`);
  }

  getActivity(id: number): Observable<ActivityDto> {
    return this.httpClient.get<ActivityDto>(`${environment.APIEndpoint}/activities/${id}`);
  }

  editActivity(activity: ActivityDto): Observable<ActivityDto> {
    return this.httpClient.put<ActivityDto>(`${environment.APIEndpoint}/activities`, activity);
  }

  addActivity(activity: ActivityDto, listId: bigint): Observable<ActivityDto> {
    activity.listId = listId;
    return this.httpClient.post<ActivityDto>(`${environment.APIEndpoint}/activities`, activity);
  }

  deleteActivity(id: bigint): Observable<ActivityDto> {
    return this.httpClient.delete<ActivityDto>(`${environment.APIEndpoint}/activities/${id}`);
  }
}
