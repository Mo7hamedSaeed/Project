import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { TvDetailsComponent } from './pages/tv-details/tv-details.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'movie/:id',component:MovieDetailsComponent},
  {path:'tv/:id',component:TvDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
