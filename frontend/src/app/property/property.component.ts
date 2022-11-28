import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { UserService } from '../user.service';
@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {

  newPropertyForm:FormGroup = new FormGroup({
   
    propertyname:new FormControl(null,Validators.required),
    propertydated:new FormControl(null,Validators.required),
    propertyTypeOption:new FormControl(null,Validators.required),
    propertyaddress:new FormControl(null,Validators.required), 
    city:new FormControl(null,Validators.required),
    state:new FormControl(null,Validators.required),
    area:new FormControl(null,Validators.required),
    landmark:new FormControl(null,Validators.required),
    approveOption:new FormControl(null,Validators.required),
    approveNo:new FormControl(null,Validators.required),
    valuation:new FormControl(null,Validators.required),
    policyPeriod:new FormControl(null,Validators.required),
    policyAmount:new FormControl(null,Validators.required) ,
    file:new FormControl(null,Validators.required),
    fileSource: new FormControl('', [Validators.required])

  })
  constructor(private _router:Router, private _userService:UserService) { }

  ngOnInit(): void {
  }

     
  onFileChange(event :any) {
  
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.newPropertyForm.patchValue({
        fileSource: file
      });
     this.newPropertyForm.patchValue(file,file.value); 
    }
 
  }
  addProperty(event :any){
    if(!this.newPropertyForm.valid ){
      console.log('Invalid Form'); return;
    }
  
   
  //console.log(this.newPropertyForm.value.fileSource)

    this._userService.addProperty(JSON.stringify(this.newPropertyForm.value),this.newPropertyForm.value.fileSource)
    .subscribe(
      data=> {console.log(data); this._router.navigate(['/user']);},
      error=>console.error(error)
    )
    // console.log(JSON.stringify(this.registerForm.value));
  }
}
