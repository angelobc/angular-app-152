import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.services';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
model: any;
isLoading: boolean;
error: string;
  
  constructor(
    private routing: Router, 
    private authService: AuthService) {
   }

  ngOnInit() {
    this.model = {
      email: '', password: ''
    };
  }

  onClick(e){
    e.preventDefault();
    this.isLoading = true;
    const {email, password} = this.model;

    this.authService.login(email, password).subscribe(response =>{
      this.isLoading = false;
      if(response.success){
        this.routing.navigate(['/admin']);
      }else{
        this.error = 'usuario y/o contraseña son erroneas';
        this.hideError();
      }
    });
    //console.log(this.model);
  }

}
