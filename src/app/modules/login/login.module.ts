import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-rounting.module';


@NgModule({
  declarations: [SignInComponent, LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
