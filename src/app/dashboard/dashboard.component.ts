import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.scss' ]
})
export class DashboardComponent implements OnInit {
  title = 'Cinegular';
  movies: any;

  constructor(private moviesService: MoviesService, private router: Router) {}

  ngOnInit() {
    this.moviesService.getAllMovies().subscribe(
      (movies) => {
        this.movies = movies;
        this.movies = this.movies.sort((a: any, b: any) => a.title.localeCompare(b.title));
      },
      (err) => {
        console.log(err);
      }
    );
  }

  editMovie(movie: any) {
    this.router.navigate([ `/edition/${movie._id}` ]);
  }

  deleteMovie(movie: any) {
    this.moviesService.deleteMovie(movie._id).subscribe(
      () => {
        this.ngOnInit();
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
