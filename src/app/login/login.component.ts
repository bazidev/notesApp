import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { Router } from '@angular/router';
import { TokenStorage } from '../user/token.storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private token:TokenStorage, private userService:UserService) { }

  ngOnInit() {
    if(this.token.getToken() != null )
    {
      this.router.navigate(['notes']);
    }
  }

  login(usr,pass)
  {
    this.userService.login(usr,pass).subscribe((data) => {
      console.log(data);
      if(data != null && data['id'] !=null)
      {
        console.log("login success");
        this.token.saveToken(data['id']);
        this.token.saveUsername(data['username']);
        this.router.navigate(['notes']);
      }
      else {
        console.log("login failed");
      }
    });
  }
}
