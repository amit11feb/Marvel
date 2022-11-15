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
    area:new FormControl(null,Validators.required),
 
  })
  constructor(private _router:Router, private _userService:UserService) { }

  ngOnInit(): void {
  }


  addProperty(){
    if(!this.newPropertyForm.valid ){
      console.log('Invalid Form'); return;
    }

    this._userService.addProperty(JSON.stringify(this.newPropertyForm.value))
    .subscribe(
      data=> {console.log(data); this._router.navigate(['/user']);},
      error=>console.error(error)
    )
    // console.log(JSON.stringify(this.registerForm.value));
  }
}
