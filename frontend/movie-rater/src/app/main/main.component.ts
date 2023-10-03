import { Component, Input } from '@angular/core';
import { ApiService } from '../api.service';
import { tap } from 'rxjs/operators'; // Import the 'tap' operator
import { Movie } from '../models/Movie';
import { EMPTY } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  movies: Movie[] = [];

  constructor(private apiService: ApiService) {}
  movieSelected:Movie|undefined
  editeMovie:Movie|undefined
  ngOnInit() {
    this.apiService.getMovies().subscribe((res:Movie[]) => {
      this.movies = res;
    }, error => {
      console.log('Error:', error);
    });
  }
  seletedMovie(data:Movie){
    this.movieSelected=data
    this.editeMovie=undefined
     console.log('parent selected movie ',this.movieSelected)
  }
  editedMovie(data:Movie){
    this.editeMovie=data
    this.movieSelected=undefined
  }
  deleteMovie(data:number){
    this.apiService.deleteMovie(data).subscribe((res)=>{
      
    })
  }
  newdMovie(){
    this.editeMovie={id:0,
      title:'',
      description:'',
      avg_rating:0,
      no_of_ratings:0};
    this.movieSelected=undefined
  }
}
