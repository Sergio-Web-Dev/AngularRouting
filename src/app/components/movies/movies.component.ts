import { Component, OnInit, inject } from '@angular/core';
import { Genere, Movie } from '../../models/movie';
import { MovieService } from '../../services/movie.service';
import { GenereService } from '../../services/genere.service';
import { RouterLink, RouterLinkActive, RouterOutlet, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent implements OnInit{
  movies: Movie[] = []
  generes: { key : Genere, value : string }[] = []
  private movieService = inject(MovieService)
  private genereService = inject(GenereService)
  private router = inject(Router)
  private activedRouter = inject(ActivatedRoute)

  ngOnInit(){
    this.generes = this.genereService.getAll();
    this.router.navigate(['view'], { relativeTo: this.activedRouter, queryParams : { "genere" : 0} });
  }

  onNewMovie(){
    this.router.navigate(['movies', 'add']);
  }

}
