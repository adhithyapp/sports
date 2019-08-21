import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './screens/dashboard/dashboard.module';
import { SettingsModule } from './screens/settings/settings.module';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http";
import { HttpModule } from '@angular/http';
import {HomeModule } from './screens/home/home.module'

import {AuthenticationService} from './services/services/authentication/authentication.service'
import {TokenInterceptorService} from './services/services/interceptors/token-interceptor.service'

import { LayoutModule } from 'angular-admin-lte';
import { LoadingPageModule, MaterialBarModule } from 'angular-loading-page';
import { adminLteConf } from './admin-lte.conf';
import { CoreModule } from './theme/core/core.module';
import {MatButtonModule} from '@angular/material/button';
import {ServicesModule} from './services/services/services.module';
import {LiasonModule} from './screens/liason/liason.module'
import {ScheduleModule} from './screens/schedule/schedule.module'
import { from } from 'rxjs';
import {PlanofcareModule} from './screens/planofcare/planofcare.module'
import {VisitsModule} from './screens/visits/visits.module'
import { ValidationService } from './services/services/validation/validation.service';
@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    DashboardModule,
    SettingsModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    LayoutModule.forRoot(adminLteConf),
    LoadingPageModule, 
    MaterialBarModule,
    CoreModule,
    MatButtonModule,
    ServicesModule,
    LiasonModule,
    ScheduleModule,
    PlanofcareModule,
    VisitsModule
    ],
  declarations: [
    AppComponent,
    LoginComponent,
    ],
  providers:[
     {provide:HTTP_INTERCEPTORS,useClass:TokenInterceptorService, multi:true }
    ,
    // TokenInterceptorService,    
    AuthenticationService,
    ValidationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
