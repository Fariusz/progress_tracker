import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivityListDto} from "../../../models/ActivityListDto";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ActivitiesListsService {

  constructor(private httpClient: HttpClient) { }

  getLists() {
    return this.httpClient.get<ActivityListDto[]>(`${environment.APIEndpoint}/lists`);
  }
}
