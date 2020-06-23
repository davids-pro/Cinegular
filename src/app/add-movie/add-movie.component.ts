import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MoviesService } from '../movies.service';
import { Movie } from '../movie.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: [ './add-movie.component.scss' ]
})
export class AddMovieComponent implements OnInit {
  submitForm: any;

  constructor(private moviesService: MoviesService, private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.submitForm = this.formBuilder.group({
      title: '',
      description: '',
      poster: ''
    });
  }

  addMovie(movie: Movie) {
    this.moviesService.createMovie(movie).subscribe(
      () => {
        this.router.navigate([ '/movies' ]);
      },
      (err) => console.log(err)
    );
  }
}
