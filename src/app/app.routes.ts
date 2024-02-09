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
import { ErroPageComponent } from './components/erro-page/erro-page.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'movies', component : MoviesComponent,
    children:[
      { path: 'view', component :MovieComponent },
      {
        path: 'add',
        component : MovieAddComponent,
        canDeactivate : [(component: MovieAddComponent) => component.onDiscardChanges()] }
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
  // { path: 'not-found', component: NotFoundComponent },
  { path: 'not-found', component: ErroPageComponent, data:{ message : 'Page Not Found'} },
  { path: '**', redirectTo: '/not-found' }
];
