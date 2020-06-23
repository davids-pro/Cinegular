import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.scss' ]
})
export class DashboardComponent implements OnInit {
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
