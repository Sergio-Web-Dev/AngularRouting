import { Component, OnInit, inject } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products : Product[] = []
  productSubscription : Subscription
  private productService = inject(ProductService)
  private activedRouter = inject(ActivatedRoute)

  constructor(){
    this.productSubscription = this.activedRouter.paramMap.subscribe((paramMap : ParamMap)=> {
      let id = paramMap.get('categoryID');
      if(id !== null && id !== undefined){
        this.products = this.productService.getByCategoryID(+id);
      }
    });
  }



}
