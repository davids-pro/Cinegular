import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../movies.service';
import { Movie } from '../movie.model';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: [ './edit-movie.component.scss' ]
})
export class EditMovieComponent implements OnInit {
  movie = new Movie();
  id: string;

  constructor(private route: ActivatedRoute, private moviesService: MoviesService, private router: Router) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.moviesService.getMovieById(this.id).subscribe((movie: any) => {
        this.movie.title = movie.title;
        this.movie.description = movie.description;
        this.movie.poster = movie.poster;
      });
    }
  }

  editMovie() {
    this.moviesService.updateMovie(this.movie, this.id).subscribe(
      () => {
        this.router.navigate([ '/films' ]);
      },
      (err) => console.log(err)
    );
  }
}
