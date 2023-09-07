import { Component,Input } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { ApiService } from 'src/app/api.service';
@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})

export class MovieDetailsComponent {
  constructor(private apiserivce:ApiService){}
 @Input() movie:any;
 faStar=faStar
 rating:number=0;
 getrating(rate:number){
   this.rating=rate;
 }
 ratingmovie(data:number){
   this.apiserivce.rateMovies(data,this.movie.id).subscribe((res)=>{
    console.log(res)
   })
 }
}
