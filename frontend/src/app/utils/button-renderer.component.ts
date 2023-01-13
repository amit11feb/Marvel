// Author: T4professor

import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-button-renderer',
  template: `
    <button type="button" style="
    {
        border: none;
        color: white;
        padding: 3px 12px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        opacity: 0.7;
        background-color: #008cba;
    
    }" (click)="onClick($event)">{{label}}</button>
    `
})

export class ButtonRendererComponent implements ICellRendererAngularComp {

  params:any;
  label: string;

  agInit(params :any): void {
    this.params = params;
    this.label = this.params.label || null;
  }

  refresh(params?: any): boolean {
    return true;
  }

  onClick($event :any) {
    if (this.params.onClick instanceof Function) {
      // put anything into params u want pass into parents component
      const params = {
        event: $event,
        rowData: this.params.node.data
        // ...something
      }
      this.params.onClick(this.params);

    }
  }
}