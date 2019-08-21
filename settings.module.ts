import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillingcodeComponent } from './billingcode/add/billingcode.component';
import { Icd10codeComponent } from './icd10code/add/icd10code.component';
import { ReferralComponent } from './referral/add/referral.component';
import { OfficeComponent } from './office/add/office.component';
import { SettingsRoutingModule} from './settings-routing.module'
import { BoxModule } from '../../../../library/angular-admin-lte/src/lib/box/box.module'
import { AlertModule } from 'angular-admin-lte';
import { FormsModule } from '@angular/forms';
import { PayerComponent } from './payer/add/payer.component';
import { CaregiverComponent } from './caregiver/add/caregiver.component';
import { PhysicianComponent } from './physician/add/physician.component'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatInputModule} from '@angular/material'
import{ CaregiverListComponent } from './caregiver/caregiver-list/caregiver-list.component';
import { OfficeListComponent } from './office/office-list/office-list.component';
import { BillingcodeListComponent } from './billingcode/billingcode-list/billingcode-list.component';
import { Icd10codeListComponent } from './icd10code/icd10code-list/icd10code-list.component';
import { PayerListComponent } from './payer/payer-list/payer-list.component';
import { PhysicianListComponent } from './physician/physician-list/physician-list.component';
import { ReferralListComponent } from './referral/referral-list/referral-list.component';
import {CrudModule} from '../../services/services/crud-services/crud/crud.module'
import { CaregiverCrudService } from 'src/app/services/services/crud-services/crud/caregiver/caregiver-crud.service';
import { ApplicantComponent } from './applicant/applicantadd/applicant.component';
import { CollegeComponent } from './college/college.component';
import { CoachComponent } from './coach/coach.component';
import { MatOptionModule, MatSelectModule} from '@angular/material';


@NgModule({
  declarations: [
    BillingcodeComponent, 
    Icd10codeComponent ,
    ReferralComponent,
    OfficeComponent,
    PayerComponent,
    CaregiverComponent,
    PhysicianComponent,
    CaregiverListComponent,
    OfficeListComponent,
    BillingcodeListComponent,
    Icd10codeListComponent,
    PayerListComponent,
    PhysicianListComponent,
    ReferralListComponent,
    ApplicantComponent,
    CollegeComponent,
    CoachComponent,
   
    
  
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    BoxModule,
    AlertModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    CrudModule,
    MatOptionModule,
    MatSelectModule
  ],
  providers:[

  ]
})
export class SettingsModule { }
