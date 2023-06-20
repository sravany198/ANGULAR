import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  isLoggedIn = false;
  logmessage='';

  toggleLogin() {
    this.isLoggedIn = !this.isLoggedIn;
    this.logmessage=this.isLoggedIn?'Logged in successfully':'Logged out successfully';
  }

}