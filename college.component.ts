import { Component, OnInit } from '@angular/core';
import { ValidationService } from 'src/app/services/services/validation/validation.service';

import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { College } from 'src/app/models/DTOs/college';
@Component({
  selector: 'app-college',
  templateUrl: './college.component.html',
  styleUrls: ['./college.component.css']
})
export class CollegeComponent  {

  colobj:College=new College();
  colList:Array<College>=[];
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
  
constructor(private validationservice: ValidationService, private http: HttpClient, private router:Router,private activatedRoute:ActivatedRoute) { }

ngOnInit(){
  this.activatedRoute.params.subscribe((params:Params)=>{console.log(params.id);
    if(params.id&&params.id!="")
    {       
    }
  });
}
addCollege() {
  
  try {
    if (this.validateCollege()) {

      // this.http.post(this.URL.SaveReferral, this.colobj).subscribe(response => {
      //   console.log(response);
      //   this.router.navigate(["settings/referral"]);
      // })
      console.log(this.colobj);
    }
  }
  catch (error) {
    console.log("error")
  }
}
validateCollege(): boolean {
  try {
    var isValid = true;
    if (this.validationservice.isStringEmptyOrNull(this.colobj.collegeName)) {
      this.errorFirstName = "College Name required";
      isValid = false;
    }

    if (this.validationservice.isStringEmptyOrNull(this.colobj.addressLine1)) {
      this.errorAddress1 = "Address Line1 Required";
      isValid = false;
    }

    if (this.validationservice.isStringEmptyOrNull(this.colobj.city)) {
      this.errorCity = "City Required";
      isValid = false;
    }

    if (this.validationservice.isStringEmptyOrNull(this.colobj.state)) {
      this.errorState = "State Required";
      isValid = false;
    }

    if (this.validationservice.isStringEmptyOrNull(this.colobj.zip)) {
      this.errorZip = "Zip Required";
      isValid = false;
    }

    if (this.validationservice.isStringEmptyOrNull(this.colobj.contactNumber)) {
      this.errorCellPhone = "Cellphone Number Required";
      isValid = false;
    }

    if (this.validationservice.isStringEmptyOrNull(this.colobj.email)) {
      this.errorEmail = "Email Required";
      isValid = false;
    }


    if (this.validationservice.isEmailValid(this.colobj.email)) {
      this.errorEmail = "Invalid Email";
      isValid = false;
    }

    if (this.validationservice.isPhoneNo(this.colobj.contactNumber)) {
      this.errorCellPhone = "Invalid Number";
      isValid = false;
    }

    if (this.validationservice.isZip(this.colobj.zip)) {
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