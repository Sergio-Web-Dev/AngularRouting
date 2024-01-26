import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent implements OnInit {
  movies : Movie[] = []
  private activatedRoute = inject(ActivatedRoute)
  private movieService = inject(MovieService)

  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe((queryParams: ParamMap) => {
      let value = queryParams.get('genere')

      if(value != null && value != undefined){
        this.getMovies(+value)
      }

    })
  }

  getMovies(genere:number){
    if(genere == 0)
      this.movies = this.movieService.getAll();
    else
      this.movies = this.movieService.getByGenereId(genere);
  }

  notification(title: string){
    alert(title);
  }
}
