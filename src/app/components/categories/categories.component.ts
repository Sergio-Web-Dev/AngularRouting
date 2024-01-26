import { Component, OnInit, inject } from '@angular/core';
import { Category } from '../../models/category';
import { CategoryService } from '../../services/category.service';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements OnInit{
  categories : Category[] = []

  private categoryService = inject(CategoryService)
  private router = inject(Router)
  private activedRoute = inject(ActivatedRoute)

  ngOnInit(){
    this.categories = this.categoryService.getAll();
    this.router.navigate(['products', 1], { relativeTo: this.activedRoute })
  }
}
