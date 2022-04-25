import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivityListDto} from "../../../models/ActivityListDto";
import {environment} from "../../../../environments/environment";
import {Observable} from "rxjs";
import {ActivityDto} from "../../../models/ActivityDto";

@Injectable({
  providedIn: 'root'
})
export class ActivitiesListsService {

  constructor(private httpClient: HttpClient) { }

  getLists() {
    return this.httpClient.get<ActivityListDto[]>(`${environment.APIEndpoint}/userLists`);
  }

  addList(list: ActivityListDto): Observable<ActivityListDto> {
    return this.httpClient.post<ActivityListDto>(`${environment.APIEndpoint}/list`, list);
  }

  editList(list: ActivityListDto): Observable<ActivityListDto> {
    return this.httpClient.put<ActivityListDto>(`${environment.APIEndpoint}/list`, list);
  }

  deleteList(id: bigint): Observable<ActivityListDto> {
    return this.httpClient.delete<ActivityListDto>(`${environment.APIEndpoint}/list/${id}`);
  }
}
