import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { FaqComponent } from './faq/faq.component';
import { PropertyComponent } from './property/property.component';
import { AgGridModule } from 'ag-grid-angular';
import { ViewPropertyComponent } from './view-property/view-property.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UserhomeComponent,
    HomeComponent,
    QuoteFormComponent,
    FaqComponent,
    PropertyComponent,
    ViewPropertyComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AgGridModule

  ],

  providers: [UserService, { provide: LocationStrategy, useClass: HashLocationStrategy }],

  bootstrap: [AppComponent]
})
export class AppModule { }
