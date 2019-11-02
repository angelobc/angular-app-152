import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import Product from '../products/product.model';
import {environment } from "../../../../environments/environment";

@Injectable()
export class ProductService{
    products : Product[] = []

    baseURL: string = environment.baseURL
    private endpoint = "products";

    constructor( private http: HttpClient){}

    getProducts(){
        //return this.products;
        return this.http.get(`${this.baseURL}${this.endpoint}`);
    }

    getProduct(id: number){
      //return this.products.filter(product => id === product.id)[0];
      return this.http.get(`${this.baseURL}${this.endpoint}/${id}`);
    }

    deleteProduct(id: number){
        // eliminar producto por id
        //this.products = this.products.filter(product => id != product.id);
        return this.http.delete(`${this.baseURL}${this.endpoint}/${id}`);
    }

    updateProduct(product: Product){
      const url = `${this.baseURL}${this.endpoint}/${product.id}`;
      return this.http.put(url, product);
    }

    createProduct(product: Product){
      const url = `${this.baseURL}${this.endpoint}`;
      return this.http.post(url, product);
    }
}