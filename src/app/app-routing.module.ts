import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { AddMovieComponent } from './add-movie/add-movie.component';

const routes: Routes = [
  { path: 'movies', component: DashboardComponent },
  { path: 'home', component: HomeComponent },
  { path: 'add-movie', component: AddMovieComponent },
  { path: '', pathMatch: 'full', component: HomeComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
