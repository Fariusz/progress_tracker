import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {ContentDto} from "../../../models/ContentDto";

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private httpClient: HttpClient) { }

  getContent(){
    return this.httpClient
      .get<ContentDto[]>(
        `${environment.APIEndpoint}/content`
      );
  }
}
