import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { User } from '../user/user.model';
import { TokenStorage } from '../user/token.storage';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user = new User();
  constructor(private snackBar: MatSnackBar, private router: Router, private token: TokenStorage, private userService: UserService) { }

  ngOnInit() {
    if (this.token.getToken() != null) {
      this.router.navigate(['notes']);
    }
  }

  registre(usr, name, email, pass, conf_pass) {
    this.user.email = email;
    this.user.username = usr;
    this.user.password = pass;
    this.user.name = name;

    if (pass != conf_pass) {
      this.snackBar.open("mot de passe et confirmation du mot de passe ne sont pas les memes", null, {
        duration: 2000,
      });
    }
    else {
      this.userService.save(this.user).subscribe((data) => {
        if (data['id'] != null) {
          this.snackBar.open("l'inscription a été faite avec succès, connectez-vous maintenant", null, {
            duration: 4000,
          });
          this.router.navigate(['login']);
        }
        else {
          this.snackBar.open("l'inscription n'a pas été faite, réessayez s'il vous plaît", null, {
            duration: 2000,
          });
        }
      });
    }
  }
}
