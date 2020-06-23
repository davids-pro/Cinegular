import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Movie } from '../movie.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: [ './add-movie.component.scss' ]
})
export class AddMovieComponent implements OnInit {
  movie = new Movie();
  submitForm: any;

  constructor(private moviesService: MoviesService, private router: Router) {}

  ngOnInit() {}

  addMovie() {
    if (
      this.movie.title !== undefined &&
      this.movie.description !== undefined &&
      this.movie.poster !== undefined &&
      this.movie.title !== '' &&
      this.movie.description !== '' &&
      this.movie.poster !== ''
    ) {
      this.moviesService.createMovie(this.movie).subscribe(
        () => {
          this.router.navigate([ '/films' ]);
        },
        (err) => console.log(err)
      );
    }
  }
}
