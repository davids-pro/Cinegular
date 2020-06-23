import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';

const routes: Routes = [
  { path: 'films', component: DashboardComponent },
  { path: 'ajout', component: AddMovieComponent },
  { path: 'edition/:id', component: EditMovieComponent },
  { path: '', pathMatch: 'full', redirectTo: 'films' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
