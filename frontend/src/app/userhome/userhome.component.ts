import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { getLocaleFirstDayOfWeek, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {

  propertylist: any;
  username:String='';

  constructor(private _user: UserService, private _router: Router) {
    this._user.getPropertyList()
      .subscribe(
        data => this.getList(data),
        error => this._router.navigate(['/login'])
      )
      // this._user.user()
      // .subscribe(
      //   data=>this.addName(data),
      //   error=>this._router.navigate(['/login'])
      // )  
  }
  
  // addName(data :any){
  //   this.username = data.username;
  // }
  // program to check if an object is an array
  getList(data: any) {
    const parsedata = data;
    var arr: string[] = []
    parsedata.map(function (element: any) {
      arr.push(element)
    })
    this.propertylist = arr


  }








  ngOnInit() {
  }

  logout() {
    this._user.logout()
      .subscribe(
        data => { console.log(data); this._router.navigate(['/login']) },
        error => console.error(error)
      )
  }

}
