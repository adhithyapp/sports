import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BillingcodeComponent } from './billingcode/add/billingcode.component';
import { Icd10codeComponent } from './icd10code/add/icd10code.component';
import { ReferralComponent } from './referral/add/referral.component';
import { OfficeComponent } from './office/add/office.component';
import {CaregiverComponent} from './caregiver/add/caregiver.component'
import { PayerComponent } from './payer/add/payer.component';
import { PhysicianComponent } from './physician/add/physician.component'
import{ CaregiverListComponent } from './caregiver/caregiver-list/caregiver-list.component'
import { OfficeListComponent } from './office/office-list/office-list.component';
import { BillingcodeListComponent } from './billingcode/billingcode-list/billingcode-list.component';
import { Icd10codeListComponent } from './icd10code/icd10code-list/icd10code-list.component';
import { PayerListComponent } from './payer/payer-list/payer-list.component';
import { PhysicianListComponent } from './physician/physician-list/physician-list.component';
import { ReferralListComponent } from './referral/referral-list/referral-list.component';
import { ApplicantComponent } from './applicant/applicantadd/applicant.component';
import { CollegeComponent } from './college/college.component';
import { CoachComponent } from './coach/coach.component';


const routes: Routes = [{   
  path: 'settings/billingcode',
  component: BillingcodeListComponent 
},
{
  path: 'settings/billingcode/add',
  component: BillingcodeComponent 
},
{

  path: 'settings/icd10code/add',
  component: Icd10codeComponent 
},
{

  path: 'settings/icd10code',
  component: Icd10codeListComponent 
},

{
  path: 'settings/referral',
  component: ReferralListComponent 
},
{
  path: 'settings/referral/add',
  component: ReferralComponent 
},
{
  path: 'settings/office/add',
  component: OfficeListComponent 
},
{
  path: 'settings/office',
  component: OfficeComponent 
},
{
  path: 'settings/caregiver',
  component: CaregiverListComponent},
{
  path: 'settings/caregiver/add',
  component: CaregiverComponent},
{
  path: 'settings/payer',
  component: PayerListComponent
},
{
  path: 'settings/payer/add',
  component: PayerComponent
},
{
  path: 'settings/physician',
  component: PhysicianListComponent
},
{
  path: 'settings/physician/add',
  component: PhysicianComponent
},

{
  path: 'settings/applicant',
  component: ApplicantComponent
},
{
  path: 'settings/colleges',
  component: CollegeComponent
},

{
  path: 'settings/coach',
  component: CoachComponent
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
