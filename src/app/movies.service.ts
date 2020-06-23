import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from './movie.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  uri = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getAllMovies() {
    return this.http.get(this.uri);
  }

  createMovie(movie: Movie) {
    return this.http.post(this.uri, movie);
  }
}
