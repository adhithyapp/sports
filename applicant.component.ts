import { Component, OnInit } from '@angular/core';
import { ValidationService } from 'src/app/services/services/validation/validation.service';
import { Applicant } from 'src/app/models/DTOs/applicant';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatOptionModule, MatSelectModule} from '@angular/material';
@Component({
  selector: 'app-applicant',
  templateUrl: './applicant.component.html',
  styleUrls: ['./applicant.component.css']
})
export class ApplicantComponent {

  appobj: Applicant = new Applicant();
  referralsList: Array<Applicant> = [];
  errorEmail="";
errorCellPhone="";
errorOtherPhone="";
errorFirstName="";
errorMiddleName="";
errorAddress1="";
errorAddress2="";
errorCity="";
errorState="";
errorZip="";
errorLastName="";
errorsport="";

  constructor(private validationservice: ValidationService, private http: HttpClient, private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(){
    this.activatedRoute.params.subscribe((params:Params)=>{console.log(params.id);
      if(params.id&&params.id!="")
      {       
      }
    });
  }
  addApplicant() {
    
    try {
      if (this.validateApplicant()) {

        // this.http.post(this.URL.SaveReferral, this.appobj).subscribe(response => {
        //   console.log(response);
        //   this.router.navigate(["settings/referral"]);
        // })
        console.log(this.appobj);
      }
    }
    catch (error) {
      console.log("error")
    }
  }
  validateApplicant(): boolean {
    try {
      var isValid = true;
      if (this.validationservice.isStringEmptyOrNull(this.appobj.firstName)) {
        this.errorFirstName = "First Name required";
        isValid = false;
      }

      
      if (this.validationservice.isStringEmptyOrNull(this.appobj.lastName)) {
        this.errorLastName = "Last Name Required";
        isValid = false;
      }

      if (this.validationservice.isStringEmptyOrNull(this.appobj.addressLine1)) {
        this.errorAddress1 = "Address Line1 Required";
        isValid = false;
      }

      if (this.validationservice.isStringEmptyOrNull(this.appobj.city)) {
        this.errorCity = "City Required";
        isValid = false;
      }

      if (this.validationservice.isStringEmptyOrNull(this.appobj.state)) {
        this.errorState = "State Required";
        isValid = false;
      }

      if (this.validationservice.isStringEmptyOrNull(this.appobj.zip)) {
        this.errorZip = "Zip Required";
        isValid = false;
      }

      if (this.validationservice.isStringEmptyOrNull(this.appobj.contactNumber)) {
        this.errorCellPhone = "Cellphone Number Required";
        isValid = false;
      }

      if (this.validationservice.isStringEmptyOrNull(this.appobj.sport)) {
        this.errorsport = "Required field";
        isValid = false;
      }
      if (this.validationservice.isStringEmptyOrNull(this.appobj.email)) {
        this.errorEmail = "Email Required";
        isValid = false;
      }


      if (this.validationservice.isEmailValid(this.appobj.email)) {
        this.errorEmail = "Invalid Email";
        isValid = false;
      }

      if (this.validationservice.isPhoneNo(this.appobj.contactNumber)) {
        this.errorCellPhone = "Invalid Number";
        isValid = false;
      }

      if (this.validationservice.isZip(this.appobj.zip)) {
        this.errorZip = "Invalid Zip";
        isValid = false;
      }
      return isValid;
    }
    catch (error) {
      console.log("error")
    }
  }
}
