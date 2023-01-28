import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BookviewComponent } from './bookview/bookview.component';
import { FooterComponent } from './footer/footer.component';
import { BookviewDetailsComponent } from './bookview-details/bookview-details.component';

const routes: Routes = [
  {path:'',redirectTo:'signin',pathMatch:'full'},
  {path:"signin",component:SigninComponent},
  {path:"signup",component:SignupComponent},
  {path:"home",component:HomeComponent},
  {path:"navbar",component:NavbarComponent},
  {path:"bookview",component:BookviewComponent},
  {path:"footer",component:FooterComponent},
  {path:"bookviewdetails/:_id",component:BookviewDetailsComponent},
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
