import { Component, OnInit, inject } from '@angular/core';
import { Genere, Movie } from '../../models/movie';
import { FormsModule } from '@angular/forms';
import { GenereService } from '../../services/genere.service';
import { MovieService } from '../../services/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './movie-add.component.html',
  styleUrl: './movie-add.component.css'
})
export class MovieAddComponent implements OnInit{
  private changeSaved : boolean = true;
  private genereService = inject(GenereService)
  private movieService = inject(MovieService)
  private router = inject(Router)
  generes : { key : Genere, value: string }[] = []
  movie : Movie = new Movie()

  onAddMovie(){
    this.movieService.add(this.movie);
    this.changeSaved = true;
    this.router.navigate(['/movies', 'view'], {queryParams:{'genere' : 0}} );
  }

  ngOnInit() {
    this.generes = this.genereService.getAll();
  }

  onChangeMovie(){
    this.changeSaved = false;
  }

  onDiscardChanges() : boolean {
    if(!this.changeSaved){
      return confirm('Do you want discard the changes?');
    }

    return true;
  }

}
