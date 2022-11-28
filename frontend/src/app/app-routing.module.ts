import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { PropertyComponent } from './property/property.component';
import { CoverageComponent } from './coverage/coverage.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
const routes: Routes = [
  {path:'',component:HomeComponent},
   {path:'products', component:CoverageComponent},
   {path:'contactUs',component:ContactusComponent},
   {path:'aboutUs',component:AboutusComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'user',component:UserhomeComponent}, 
  {path:'faq',component: FaqComponent},
  {path:'newProperty',component: PropertyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
