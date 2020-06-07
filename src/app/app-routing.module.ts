import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NationalComponent } from './national/national.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';


const routes: Routes = [
  { path: '', component: AppComponent },
  {path: 'login', component: LoginComponent},
  { path: 'national', component: NationalComponent },
  { path: '**', component: ErrorComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
