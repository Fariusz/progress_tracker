import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ActivityDto} from "../../../models/ActivityDto";
import {environment} from "../../../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(private httpClient: HttpClient) { }

  getActivities(){
        return this.httpClient
          .get<ActivityDto[]>(
            `${environment.APIEndpoint}/userActivities`
          );
  }

  getActivity(id: number): Observable<ActivityDto>{
    return this.httpClient.get<ActivityDto>(`${environment.APIEndpoint}/activities/${id}`);
  }
}
