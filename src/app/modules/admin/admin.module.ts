import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.compónent';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { ProductService } from './services/product.service';
import { ProductNewComponent } from './product-new/product-new.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { RouterModule } from '@angular/router';
const components = [HeaderComponent, FooterComponent,ProductsComponent,ProductNewComponent,
  ProductEditComponent];

@NgModule({
  declarations: [
    ...components,
    
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ...components
  ],
  providers: [ProductService]
})
export class AdminModule { }
