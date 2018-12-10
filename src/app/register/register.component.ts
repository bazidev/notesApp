import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { User } from '../user/user.model';
import { TokenStorage } from '../user/token.storage';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user =  new  User();
  constructor(private router:Router,private token:TokenStorage,private userService : UserService) { }

  ngOnInit() {
    if(this.token.getToken() != null )
    {
      this.router.navigate(['note']);
    }
  }

  registre(usr,name,email,pass,conf_pass){
    this.user.email = email;
    this.user.username = usr;
    this.user.password = pass;
    this.user.name = name;
    
    this.userService.save(this.user);
  }
}
