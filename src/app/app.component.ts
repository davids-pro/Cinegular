import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MoviesService } from './movies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit {
  title = 'Cinegular';
  movies;

  constructor(private moviesService: MoviesService) {}

  ngOnInit() {
    this.moviesService.getAllMovies().subscribe((movies) => {
      this.movies = movies;
      console.log(this.movies);
    });
  }
}
