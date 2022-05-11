import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UploadPhotoService {

  constructor(private httpClient: HttpClient) { }

    addPhoto(photo: File): Observable<File> {
      return this.httpClient.post<File>(`${environment.APIEndpoint}/upload`, photo);
    }
}
