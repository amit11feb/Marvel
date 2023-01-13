import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { UserService } from '../user.service';
import Validation from '../utils/validation';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // registerForm: FormGroup;
  registerForm: FormGroup = new FormGroup({
    fName: new FormControl(''),
    mName: new FormControl(''),
    lName: new FormControl(''),
    panNumber: new FormControl(''),
    aadharNumber: new FormControl(''),
    dob: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
  });

  submitted = false;


  constructor(private formBuilder: FormBuilder, private _router: Router, private _userService: UserService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      fName: ['', [Validators.required]],
      mName: ['', [Validators.required]],
      lName: ['', [Validators.required]],
      panNumber: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10),]],
      aadharNumber: ['', [Validators.required,]] , 

      dob: ['', [Validators.required]],

      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],

    }, {
      validators: [Validation.match('password', 'confirmPassword')],

    });
  }

  moveToLogin() {
    this._router.navigate(['/login']);
  }
  //  get f() { return this.registerForm.controls; }
  get f(): { [key: string]: AbstractControl } {
    return this.registerForm.controls;
  }
  onSubmit() {
    this.submitted = true;

    if (!this.registerForm.valid ) {
      console.log('Invalid Form'); return;
    }

    this._userService.register(JSON.stringify(this.registerForm.value))
      .subscribe(
        data => { console.log(data); this._router.navigate(['/login']); },
        error => console.error(error)
      )
    // console.log(JSON.stringify(this.registerForm.value));
  }
}
