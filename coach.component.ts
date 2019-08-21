import { Component, OnInit } from '@angular/core';
import { ValidationService } from 'src/app/services/services/validation/validation.service';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Coach } from 'src/app/models/DTOs/coach';


@Component({
  selector: 'app-coach',
  templateUrl: './coach.component.html',
  styleUrls: ['./coach.component.css']
})
export class CoachComponent  {

  coachobj:Coach=new Coach();
  coachList:Array<Coach>=[];
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
  errorinterest="";
  
  constructor(private validationservice: ValidationService, private http: HttpClient, private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(){
    this.activatedRoute.params.subscribe((params:Params)=>{console.log(params.id);
      if(params.id&&params.id!="")
      {       
      }
    });
  }
  addCoach() {
    
    try {
      if (this.validateCoach()) {

        // this.http.post(this.URL.SaveReferral, this.coachobj).subscribe(response => {
        //   console.log(response);
        //   this.router.navigate(["settings/referral"]);
        // })
        console.log(this.coachobj);
      }
    }
    catch (error) {
      console.log("error")
    }
  }
  validateCoach(): boolean {
    try {
      var isValid = true;
      if (this.validationservice.isStringEmptyOrNull(this.coachobj.firstName)) {
        this.errorFirstName = "First Name required";
        isValid = false;
      }

     
      if (this.validationservice.isStringEmptyOrNull(this.coachobj.lastName)) {
        this.errorLastName = "Last Name Required";
        isValid = false;
      }

      if (this.validationservice.isStringEmptyOrNull(this.coachobj.addressLine1)) {
        this.errorAddress1 = "Address Line1 Required";
        isValid = false;
      }

      if (this.validationservice.isStringEmptyOrNull(this.coachobj.city)) {
        this.errorCity = "City Required";
        isValid = false;
      }

      if (this.validationservice.isStringEmptyOrNull(this.coachobj.state)) {
        this.errorState = "State Required";
        isValid = false;
      }

      if (this.validationservice.isStringEmptyOrNull(this.coachobj.zip)) {
        this.errorZip = "Zip Required";
        isValid = false;
      }
      if (this.validationservice.isStringEmptyOrNull(this.coachobj.sport)) {
        this.errorinterest = "Required field";
        isValid = false;
      }

      if (this.validationservice.isStringEmptyOrNull(this.coachobj.contactNumber)) {
        this.errorCellPhone = "Cellphone Number Required";
        isValid = false;
      }

      if (this.validationservice.isStringEmptyOrNull(this.coachobj.email)) {
        this.errorEmail = "Email Required";
        isValid = false;
      }


      if (this.validationservice.isEmailValid(this.coachobj.email)) {
        this.errorEmail = "Invalid Email";
        isValid = false;
      }

      if (this.validationservice.isPhoneNo(this.coachobj.contactNumber)) {
        this.errorCellPhone = "Invalid Number";
        isValid = false;
      }
      

      if (this.validationservice.isZip(this.coachobj.zip)) {
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