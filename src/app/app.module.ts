import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
/*import { LoginModule } from './modules/login/login.module';
import { AdminModule } from './modules/admin/admin.module';*/
import { AppRouterModule } from "./app-rounting.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    /*LoginModule,
    AdminModule,*/
    AppRouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
