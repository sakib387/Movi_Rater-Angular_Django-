import { Component,Input ,Output,EventEmitter} from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { ApiService } from 'src/app/api.service';
import { Movie } from 'src/app/models/Movie';
@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})

export class MovieDetailsComponent {
  constructor(private apiserivce:ApiService){}
 @Input() movie!:Movie;
 @Output() updatedMovie=new EventEmitter<Movie>()
 faStar=faStar
 rating:number=0;
 getrating(rate:number){
   this.rating=rate;
 }
 ratingmovie(data:number){
   this.apiserivce.rateMovies(data,this.movie.id).subscribe((res)=>{
    this.getdetails()
   })
 }
 getdetails(){
   this.apiserivce.getMovie(this.movie.id).subscribe((res)=>{
     this.updatedMovie.emit(res)
   })
 }
}
