import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products : Product[] = [
    new Product(1, 'Laptop Toshiba Fusion i7 16RAM', 'Medium gama laptop', 150.00, '', 1),
    new Product(2, 'Laptop Toshiba Fusion II i9 32RAM', 'The best laptop in the market', 300.00, '', 1)
  ]
  constructor() { }

  getAll(){
    return this.products;
  }

  getByID(id:number): Product | undefined {
    let index = this.products.findIndex(x=> x.id == id)

    if(index < 0 )
      return undefined;

    return this.products[index];
  }

  getByCategoryID(id:number) : Product[] {
    return this.products.filter(x => x.categoryID == id);
  }
}
