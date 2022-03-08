import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from "../auth/auth.service";
import {Subscription} from "rxjs";
import {faSignOutAlt} from '@fortawesome/free-solid-svg-icons';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {

  faSignOut = faSignOutAlt;

  isAuthenticated = false;
  language = 'en';
  private userSub!: Subscription;

  constructor(private authService: AuthService, private translate: TranslateService) {
    translate.setDefaultLang('en');
  }

  ngOnInit() {
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
    });
  }

  useLanguage(language: string): void {
    this.translate.use(language);
    this.language = language;
  }

  onRegister() {
    this.authService.toggleLoginMode(false);
  }

  onLogin() {
    this.authService.toggleLoginMode(true);
  }

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}
