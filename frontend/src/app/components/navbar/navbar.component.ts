import { Component, OnInit } from '@angular/core';
import {AuthComponent} from "../auth/auth.component";
import {AuthService} from "../../services/auth/auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  register(){
    console.log("register");
  }

  login(){
    console.log("login");
  }

}
