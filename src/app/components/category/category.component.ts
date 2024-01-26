import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ActivatedRoute, ParamMap, Router, RouterLink } from '@angular/router';
import { Numbers } from '../../utilities/numbers';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit, OnDestroy{
  categoryID : number = 0
  numbers : number[]  = []

  private activeRouter = inject(ActivatedRoute);
  private router = inject(Router);

  paramMapSubscription : Subscription

  constructor(){
    for (let index = 0; index < 50; index++) {
      this.numbers.push(Math.floor(Math.random() * 1500))
    }
    this.numbers.sort((a, b) => a - b)
    this.paramMapSubscription = this.activeRouter.paramMap.subscribe((paramMap : ParamMap)  =>
    {
      let id = paramMap.get('id');
      if(Numbers.isNumber(id))
        this.categoryID = Number(id);
      else
        this.router.navigate(['**']);
    });
  }

  ngOnInit() {

  }

  ngOnDestroy() {
    this.paramMapSubscription.unsubscribe();
  }

}
