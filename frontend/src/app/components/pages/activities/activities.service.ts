import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ActivityDto} from "../../../models/ActivityDto";
import {environment} from "../../../../environments/environment";

export interface Pagination {
  page: number;
  pageSize: number;
}

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {

  constructor(private httpClient: HttpClient) { }

  getActivities(pagination: Pagination){
        return this.httpClient
          .get<ActivityDto[]>(
            `${environment.APIEndpoint}/userActivities/pageable`,{
              params: {
                page: pagination.page.toString(),
                pageSize: pagination.pageSize.toString()
              }
            }
          );
  }

  getActivity(id: number): Observable<ActivityDto>{
    return this.httpClient.get<ActivityDto>(`${environment.APIEndpoint}/activities/${id}`);
  }

  editActivity(activity: ActivityDto):Observable<ActivityDto> {
    return this.httpClient.put<ActivityDto>(`${environment.APIEndpoint}/activities`, activity);
  }

  addActivity(activity: ActivityDto): Observable<ActivityDto> {
    return this.httpClient.post<ActivityDto>(`${environment.APIEndpoint}/activities`, activity);
  }
}
