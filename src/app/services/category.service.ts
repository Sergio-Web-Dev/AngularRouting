import { Injectable } from '@angular/core';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categories : Category[]  = [
    new Category(1, 'Computers'),
    new Category(2, 'Mouse'),
    new Category(3, 'Keyboards'),
    new Category(4, 'Monitors'),
    new Category(5, 'Processor'),
    new Category(6, 'Hard Disc')
  ]
  constructor() { }

  getAll() : Category[] {
    return this.categories;
  }

  getByID(id:number) : Category | undefined {
    let index = this.categories.findIndex(x=> x.ID == id);

    if(index<0)
      return undefined;

    return this.categories[index]
  }

}
