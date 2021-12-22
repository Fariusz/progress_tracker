import {Component} from '@angular/core';
import {AuthService} from "../../services/auth/auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private authService: AuthService) { }

  register(){
    this.authService.toggleLoginMode(false);
  }

  login(){
    this.authService.toggleLoginMode(true);
  }
}
