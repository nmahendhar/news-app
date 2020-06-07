import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }
  username: string ='mahendhar'
  password: string='Pooja'
  ngOnInit(): void {
  }
  loginHandle(){
    if(this.username=='mahendhar123'){
    console.log("login submitted:  "+this.username+"  password: "+this.password)
  }else{
    this.router.navigate(['error',this.username])
    }
  }
}
