import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TokenStorage } from '../user/token.storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private token:TokenStorage,private router:Router) { }


  @Input() username : string;
  
  @Input()
  showSideBar:boolean = false;

  @Output()
  showSideBarChange:EventEmitter<boolean> = new EventEmitter<boolean>();

  ngOnInit() {
  }

  logout(){
    this.token.signOut();
    this.router.navigate(['login']);
  }
  afficherSideBar(){
    this.showSideBar = !this.showSideBar;
    this.showSideBarChange.emit(this.showSideBar);
  }
  
}
