import {Component} from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
    selector:'quote-form',
    templateUrl:'./quote-form.component.html',
    styleUrls:['./quote-form.component.css']
})

export class QuoteFormComponent {
    submitted = false;
    onSubmit(){
        this.submitted = true;
    }
}