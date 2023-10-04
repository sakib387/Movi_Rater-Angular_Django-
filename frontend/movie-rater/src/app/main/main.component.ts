import { Component, Input } from '@angular/core';
import { ApiService } from '../api.service';
import { Movie } from '../models/Movie';
import{CookieService}from 'ngx-cookie-service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  movies: Movie[] = [];

  constructor(private apiService: ApiService,
    private cookieService:CookieService,
    private route:Router
    ) {}
  movieSelected:Movie|undefined
  editeMovie:Movie|undefined
  ngOnInit() {
    const token=this.cookieService.get('mr-token')
    if(!token){
     this.route.navigate(['/auth'])
    }
    else{
      this.apiService.getMovies().subscribe((res:Movie[]) => {
        this.movies = res;
      }, error => {
        console.log('Error:', error);
      });
    }
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
      this.movies=this.movies.filter(mov=>mov.id!=data)
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
  updateMovie(data:Movie){
    const ind=this.movies.findIndex(mov=>mov.id==data.id)
    if(ind){
      this.movies[ind]=data
    }
    this.editeMovie=undefined
  }
  createdMovie(data:Movie){
    this.movies.push(data)
    this.editeMovie=undefined
  }
  logOut(){
    this.cookieService.delete('mr-token')
    this.route.navigate(['/auth'])
  }
}
