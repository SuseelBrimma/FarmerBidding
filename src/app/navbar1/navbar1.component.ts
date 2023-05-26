import { Component, OnInit } from '@angular/core';
import {  AuthService } from '../_service/auth.service';

@Component({
  selector: 'app-navbar1',
  templateUrl: './navbar1.component.html',
  styleUrls: ['./navbar1.component.css']
})
export class Navbar1Component implements OnInit {

  constructor(public auth:AuthService) { }

  ngOnInit(): void {
  }

  logout(){
      //remove token
      this.auth.removeToken();
      this.auth.canAccess1();
  }

}
