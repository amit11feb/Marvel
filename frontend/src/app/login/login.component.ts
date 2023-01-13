import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup,  Validators ,FormBuilder} from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  isSuccesfulLogin = false;

 
  constructor(private formBuilder: FormBuilder,private _router:Router, private _user:UserService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
    
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
     
  });
  }
  get f() { return this.loginForm.controls; }

  moveToRegister(){
    this._router.navigate(['/register']);
  }

 

  onSubmit(){

    this.submitted = true;
    this.isSuccesfulLogin = false;

    if(this.loginForm.invalid){
      console.log('Invalid');return;
    }

    // console.log(JSON.stringify(this.loginForm.value));
    this._user.login(JSON.stringify(this.loginForm.value))
    .subscribe(
      data=>{;console.log(data);this._router.navigate(['/user']);} ,
      error=>{console.error(error);this.isSuccesfulLogin = true;}
    )
  }

}
