import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'angular-admin-lte';
import { HomeComponent } from './screens/home/home/home.component';
import { AuthenticationService } from './services/services/authentication/authentication.service';
import { TokenInterceptorService } from './services/services/interceptors/token-interceptor.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  public customLayout: boolean;
  public isLoggedIn: boolean;
  constructor(private layoutService: LayoutService, private authService: AuthenticationService, private interceptor: TokenInterceptorService) {
    this.authService.isLoggedIn.subscribe(val => this.isLoggedIn = val)
  }

  LogIn(value) {
    console.log("its here");

  }

  ngOnInit() {
    this.layoutService.isCustomLayout.subscribe((value: boolean) => {
      this.customLayout = value;
    });
  }

  AuthHelper(value) {

  }
}
