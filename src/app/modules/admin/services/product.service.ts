import { Injectable } from "@angular/core";
import Product from '../products/product.model';

@Injectable()
export class ProductService{
    products : Product[] = [{
        id: 100,
        name : 'Producto 01',
        detail : 'Descripcion...',
        price: 20.00,
        stock: 1
      },
      {
        id: 101,
        name : 'Producto 02',
        detail : 'Descripcion...',
        price: 30.00,
        stock: 2
      },
      {
        id: 102,
        name : 'Producto 03',
        detail : 'Descripcion...',
        price: 40.00,
        stock: 3
      }
    ]

    constructor(){

    }

    getProducts(){
        return this.products;
    }

    getProduct(id: number):Product{
      return this.products.filter(product => id === product.id)[0];
    }

    deleteProduct(id: number): boolean{
        // eliminar producto por id
        this.products = this.products.filter(product => id != product.id);
        console.log(this.products);
        return true;
    }

    updateProduct(){

    }
}