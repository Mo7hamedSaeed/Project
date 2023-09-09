import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/movie.service';
import { TvService } from 'src/app/tv.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit{

  imagePath: string = 'https://image.tmdb.org/t/p/w500';
  allMovies!:any[];
  allTV!:any[];

  constructor(private myMoviesService: MovieService, private myTVService:TvService){}

  ngOnInit(): void
  {
    this.myMoviesService.getallMovie().subscribe({next:(response)=>
    {
      this.allMovies = response.results;
    }});

    this.myTVService.getallTV().subscribe({next:(response)=>
      {
        this.allTV = response.results;
      }});
  }



}
