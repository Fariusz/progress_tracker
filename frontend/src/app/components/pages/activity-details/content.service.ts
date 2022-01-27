import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {ContentDto} from "../../../models/ContentDto";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private httpClient: HttpClient) { }

  getContent(){
    return this.httpClient.get<ContentDto[]>(`${environment.APIEndpoint}/content`);
  }

  getActivityContent(id: number){
    return this.httpClient.get<ContentDto[]>(`${environment.APIEndpoint}/content/${id}`);
  }

  editContent(content: ContentDto):Observable<ContentDto> {
    return this.httpClient.put<ContentDto>(`${environment.APIEndpoint}/content`, content);
  }

  addContent(content: ContentDto):Observable<ContentDto> {
    return this.httpClient.post<ContentDto>(`${environment.APIEndpoint}/content`, content);
  }

  deleteContent(id: bigint) : Observable<ContentDto> {
    return this.httpClient.delete<ContentDto>(`${environment.APIEndpoint}/content/${id}`);
  }
}
