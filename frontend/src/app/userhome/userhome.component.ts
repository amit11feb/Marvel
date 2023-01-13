import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { getLocaleFirstDayOfWeek, JsonPipe } from '@angular/common';
import { ButtonRendererComponent } from '../utils/button-renderer.component';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})


export class UserhomeComponent implements OnInit {
  frameworkComponents: any;
  propertylist: any;
  username: String = '';
  columnDefs = [{
    headerName: 'Property Name',
    field: 'propertyname',
    sortable: true,
  }, { headerName: 'Property Description', field: "propertydesc", sortable: true,suppressSizeToFit: true },
  { headerName: 'Property Address', field: "propertyaddress", sortable: true, suppressSizeToFit: true},
  { headerName: 'Registration Number', field: "registrationNumber", sortable: true,suppressSizeToFit: true },
  { headerName: 'Policy Amount', field: "policyAmount", sortable: true,suppressSizeToFit:true },
  { headerName: 'Policy Coverage', field: "policyCoverage", sortable: true, suppressSizeToFit:true },
  { headerName: 'City', field: "city", sortable: true,  suppressSizeToFit:true },
  {
    headerName: 'Delete',
    suppressSizeToFit:true ,
    width: 90,
    cellRenderer: 'buttonRenderer',
    cellRendererParams: {
      onClick: this.onDeleteButtonClick.bind(this),
      label: 'Delete'
    },
  },

   
    

  {
    headerName: 'View',
    suppressSizeToFit:true ,
    width: 90,
    cellRenderer: 'buttonRenderer',
    cellRendererParams: {
      onClick: this.onEditButtonClick.bind(this),
      label: 'View'
    }}
];


   
  constructor(private _user: UserService, private _router: Router) {
    this._user.getPropertyList()
      .subscribe(
        data => this.getList(data),
        error => this._router.navigate(['/login'])
      )
      this.frameworkComponents = {
        buttonRenderer: ButtonRendererComponent,
      }
     
  }
  
  onDeleteButtonClick(params :any)
  {
    console.log(params)
    console.log(params.data.id)
    this._user.deleteProperty(params.data.id)
    .subscribe(
       data => {  this._user.getPropertyList()
        .subscribe(
          data => this.getList(data)
         )
        
     },
     )
   console.log("Deleet")
  }
  onEditButtonClick(params :any){
    console.log(params.data.id)
    this._router.navigate(["/viewProperty/"+params.data.id])
 
  }
  
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
