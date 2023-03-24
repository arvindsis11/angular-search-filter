import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;
  loginForm!:FormGroup;
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username : new FormControl('',[Validators.required]), 
      password : new FormControl('',[Validators.required,Validators.minLength(5)])
    });
  }

  onLogin(){
    console.log("clicked")
    this.router.navigate(["/search"]);

  }

}
