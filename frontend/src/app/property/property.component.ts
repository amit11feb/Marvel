import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import { UserService } from '../user.service';
@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {
  newPropertyForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,private _router:Router, private _userService:UserService) { }

  ngOnInit(): void {
    this.newPropertyForm = this.formBuilder.group({
    
      propertyname: ['', Validators.required],
      propertydesc: ['', [Validators.required]],
      propertyaddress: ['', [Validators.required]],
      landmark:['',Validators.required],
      state: ['', Validators.required],
      city:['',Validators.required],
      reraApproved:[''],
      registrationNumber :['',Validators.required],
      valuation :['',Validators.required],
      propertyAge :['',Validators.required],
      policyDuration :['',Validators.required],
      policyAmount :['',Validators.required],
      policyCoverage:['',Validators.required],
      file:['',Validators.required]

  });

  }

  get f() { return this.newPropertyForm.controls; }
  
  onFileChange(event :any) {
  
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.newPropertyForm.patchValue({
        fileSource: file
      });
     this.newPropertyForm.patchValue(file,file.value); 
    }
    console.log(this.newPropertyForm,this.newPropertyForm.value.fileSource);
 
  }

  onReset() {
    this.submitted = false;
    this.newPropertyForm.reset();
}
  onSubmit(event :any){
    this.submitted = true;

    if(this.newPropertyForm.invalid ){
      console.log('Invalid Form'); return;
    }
  
    console.log(this.newPropertyForm,this.newPropertyForm.value.fileSource);

    this._userService.addProperty(JSON.stringify(this.newPropertyForm.value),this.newPropertyForm.value.fileSource)
    .subscribe(
      data=> {console.log(data); this._router.navigate(['/user']);},
      error=>console.error(error)
    )
    // console.log(JSON.stringify(this.registerForm.value));
  }
}
