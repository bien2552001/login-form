import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login123Component } from './logincheck/login123/login123.component';
import { RegisterComponent } from './logincheck/register/register.component';


const routes: Routes = [
  { path: 'login', component: Login123Component },
  { path: 'register', component: RegisterComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
