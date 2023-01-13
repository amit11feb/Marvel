 import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
 import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-property',
  templateUrl: './view-property.component.html',
  styleUrls: ['./view-property.component.css']
})
export class ViewPropertyComponent implements OnInit {
  propertylist: any;

  constructor(private _user: UserService, private _router: Router,private _route : ActivatedRoute) {
 
    this._user.getPropertybyid(this._route.snapshot.params["id"])
    .subscribe(
      data => {console.log(data);this.propertylist=data}
 
    )
 
   }

  ngOnInit(): void {
  }

  onReset(){
    this._router.navigate(['/user'])
  }

}
