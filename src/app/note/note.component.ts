import { Component, OnInit } from '@angular/core';
import { UserComponent } from '../user/user.component';
import { TokenStorage } from '../user/token.storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  idNote:number;
  title:string;
  body:string;
  updateDate:Date;
  creationDate:Date;
  deleteDate:Date;
  user:UserComponent;
  number : number;
  constructor(private token:TokenStorage,private router:Router) { }

  ngOnInit() {
    if(this.token.getToken() == null )
    {
      this.router.navigate(['login']);
    }
  }

  logout(){
    this.token.signOut();
    this.router.navigate(['login']);
  }
  
}


export class ExpansionOverviewExample {
  panelOpenState = false;
}