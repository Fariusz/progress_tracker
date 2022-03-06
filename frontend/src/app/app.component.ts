import {Component, OnInit} from '@angular/core';
import {AuthService} from "./components/auth/auth.service";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Progress tracker';

  constructor(private authService: AuthService, private translate: TranslateService) {
    translate.setDefaultLang('en');
  }

  ngOnInit() {
    this.authService.autoLogin();
  }

  useLanguage(language: string): void {
    this.translate.use(language);
  }
}
