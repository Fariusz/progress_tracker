import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from "../auth/auth.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy{

  isAuthenticated = false;
  private userSub!: Subscription;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.userSub = this.authService.user.subscribe( user => {
    this.isAuthenticated = !!user;
    });
  }

  register(){
    this.authService.toggleLoginMode(false);
  }

  login(){
    this.authService.toggleLoginMode(true);
  }

  logout(){

  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}
