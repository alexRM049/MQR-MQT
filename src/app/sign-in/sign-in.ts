import { Component, inject } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-sign-in',
  imports: [RouterModule, 
            Header, 
            Footer, 
            FormsModule],
  templateUrl: './sign-in.html',
  styleUrl: './sign-in.css',
})
export class SignIn{

  formData: any ={
    email:'',
    password:'',
  }

  onSubmit(){
    console.log(this.formData)
  }
}
