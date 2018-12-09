import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  idUser:number;
  username:string;
  password:string;
  
  constructor() { }

  ngOnInit() {
  }

}
