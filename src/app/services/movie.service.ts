import { Injectable } from '@angular/core';
import { Genere, Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  movies : Movie[] = []
  constructor() {
    this.movies.push(new Movie(1, 'Back to the future', 'some ramdon description', Genere.SciFi, 'https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg'))
    this.movies.push(new Movie(2, 'Start Trek', 'some ramdon description', Genere.SciFi, 'https://m.media-amazon.com/images/I/91FclXCoXqL._AC_UF894,1000_QL80_.jpg'))
    this.movies.push(new Movie(3, 'Avatar', 'some ramdon description', Genere.SciFi, 'https://m.media-amazon.com/images/M/MV5BZDA0OGQxNTItMDZkMC00N2UyLTg3MzMtYTJmNjg3Nzk5MzRiXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_FMjpg_UX1000_.jpg'))
    this.movies.push(new Movie(4, 'My first kiss', 'some ramdon description', Genere.Romance, 'https://m.media-amazon.com/images/M/MV5BZDU5NjkwOTMtMDQ1Yy00ODYyLTliNTktOTUzYjZjNGFiMWI3XkEyXkFqcGdeQXVyNzMxOTgwODQ@._V1_.jpg'))
    this.movies.push(new Movie(5, 'Impossible mission', 'some ramdon description', Genere.Action, "https://m.media-amazon.com/images/I/81RfxadikXL._AC_UF894,1000_QL80_.jpg"))
    this.movies.push(new Movie(6, 'Midsommar', 'some ramdon description', Genere.Horror, "https://pics.filmaffinity.com/midsommar-578791309-mmed.jpg"))
    this.movies.push(new Movie(7, 'Hereditary', 'some ramdon description', Genere.Horror, "https://imageio.forbes.com/blogs-images/darrynking/files/2018/06/HEREDITARY_PAYOFF_FINISH_V5-1200x1778.jpg?format=jpg&width=1440"))
    this.movies.push(new Movie(8, 'Talk to me', 'some ramdon description', Genere.Horror, "https://dx35vtwkllhj9.cloudfront.net/altitudefilm/talk-to-me/images/regions/gb/onesheet.jpg"))
    this.movies.push(new Movie(9, 'Free guy', 'some ramdon description', Genere.Comedy, "https://musicimage.xboxlive.com/catalog/video.movie.8D6KGWXN4M1H/image?locale=en-au&mode=crop&purposes=BoxArt&q=90&h=300&w=200&format=jpg"))
  }

  getAll(){
    return this.movies;
  }

  getByGenereId(id:number) : Movie[] {
    return this.movies.filter(x=> x.genere == id);
  }

  getById(id:number) : Movie | undefined{
    let index = this.movies.findIndex(x=> x.id == id)

    if(index >= 0)
      return this.movies[index];

    return undefined;
  }

  add(movie: Movie){
    let number = Math.max(...this.movies.map(m => m.id));
    number++
    movie.id = number;

    this.movies.push(movie);
  }
}
