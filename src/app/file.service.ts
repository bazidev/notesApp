import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpEvent, HttpRequest, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  

  constructor(private http: HttpClient) {}
 
  pushFileToStorage(file: File): Observable<HttpEvent<{}>> {
    let formdata: FormData = new FormData();
    formdata.append('file', file);
    formdata.append('Content-Type', 'application/json');
    formdata.append('Accept', `application/json`);

    const req = new HttpRequest('POST', "http://localhost:8091/uploadFile", formdata,  {
      reportProgress: true,
      responseType: 'json',
      
    });
 
    return this.http.request(req);
  }
 
 
}
