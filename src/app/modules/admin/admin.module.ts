import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.compónent';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { ProductService } from './services/product.service';
import { ProductNewComponent } from './product-new/product-new.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-rounting.module';
import { ProductFormComponent } from './product-form/product-form.component';
import { ReactiveFormsModule } from '@angular/forms';
const components = [
  HeaderComponent, 
  FooterComponent,
  ProductsComponent,
  ProductNewComponent,
  ProductEditComponent,
  AdminComponent,
  ProductFormComponent
];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AdminRoutingModule
  ],
  providers: [ProductService]
})
export class AdminModule { }
