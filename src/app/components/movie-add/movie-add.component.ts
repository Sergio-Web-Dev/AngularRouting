import { Component, inject } from '@angular/core';
import { Genere, Movie } from '../../models/movie';
import { FormsModule } from '@angular/forms';
import { GenereService } from '../../services/genere.service';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './movie-add.component.html',
  styleUrl: './movie-add.component.css'
})
export class MovieAddComponent {
  movie : Movie = new Movie()
  private genereService = inject(GenereService)
  private movieService = inject(MovieService)
  generes : { key : Genere, value: string }[] = this.genereService.getAll();

  onAddMovie(){
    this.movieService.add(this.movie)
  }
}
