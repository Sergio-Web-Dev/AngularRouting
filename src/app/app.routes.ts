import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { CategoryComponent } from './components/category/category.component';
import { NotFoundComponent } from './components/notFound/notFound.component';
import { MovieComponent } from './components/movie/movie.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieAddComponent } from './components/movie-add/movie-add.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ProductsComponent } from './components/products/products.component';
import { authGuard, authChildGuard } from './services/auth-guard.service';

export const routes: Routes = [
  { path: 'movies', component : MoviesComponent,
    children:[
      { path: 'view', component :MovieComponent },
      { path: 'add', component : MovieAddComponent }
    ] },
  { path: 'about', component : AboutComponent, canActivate : [authGuard] },
  { path: 'contact', component : ContactComponent },
  { path: 'category/:id', component : CategoryComponent },
  { path: 'category', component : CategoryComponent },
  { path: 'categories', component : CategoriesComponent, canActivateChild : [authChildGuard],
    children: [
      { path: 'products/:categoryID', component: ProductsComponent }
    ]
  },
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: '/not-found' }
];
