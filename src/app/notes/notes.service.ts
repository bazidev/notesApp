import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenStorage } from '../user/token.storage';
import { User } from '../user/user.model';
import { Note } from './note.model';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  public API = 'http://localhost:8091';

  constructor(private http: HttpClient,private token:TokenStorage) { }

  getAll(): Observable<any> {
    return this.http.get(this.API+"/usernotes/"+this.token.getToken());
  }

    get(id: number) {
      return this.http.get(this.API + '/' + id);
    }

  save(note: Note){
    console.log(note);
    return this.http.post(this.API+"/notes", note);
  }

  
  login(username: string,password: string) {
    let headers = new HttpHeaders();
    headers.set('Access-Control-Allow-Origin', '*');
    return this.http.post(this.API+"/login",{"username":username,"password":password},{headers:headers});
  }

  remove(id: number) {
    return this.http.delete(this.API+"/"+id);
  }

  archive(id:number,val:boolean)
  {
    return this.http.post(this.API+"/notes/archive",{"id":id,"val":val});
  }

  delete(id:number,val:boolean)
  {
    return this.http.post(this.API+"/notes/delete",{"id":id,"val":val});
  }
}
