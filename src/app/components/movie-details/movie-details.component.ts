import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movie:any;
  constructor(private service:MoviesService,
    private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params=>{
      let id=params['imdbID'];
      this.service.getMovieDetails(id).subscribe(resp=>this.movie=resp);
    });
  }
  goBack(){
    window.history.back();
  }
}
