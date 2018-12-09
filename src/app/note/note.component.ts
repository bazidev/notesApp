import { Component, OnInit } from '@angular/core';
import { UserComponent } from '../user/user.component';

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
  constructor() { }

  ngOnInit() {
  }
  
}
export class ExpansionOverviewExample {
  panelOpenState = false;
}