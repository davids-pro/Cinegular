import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  uri = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getAllMovies() {
    return this.http.get(`${this.uri}/all_movies`);
  }
}
