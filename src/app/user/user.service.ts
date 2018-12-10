import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public API = 'http://localhost:8091/User';

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(this.API);
  }

  get(id: number) {
    return this.http.get(this.API + '/' + id);
  }

  save(user: User){

    console.log(user);

    return this.http.post(this.API, user);
  
  }

  
  login(username: string,password: string) {
    let headers = new HttpHeaders();
    headers.set('Access-Control-Allow-Origin', '*');
    return this.http.post(this.API+"/login",{"username":username,"password":password},{headers:headers});
  }

  remove(id: number) {
    return this.http.delete(this.API+"/"+id);
  }
}
