import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';
@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent {
movies=['hello','sakib']
constructor(private apiService:ApiService){}
 ngOnInit(){
  this.apiService.getMovies().subscribe((res)=>{
    console.log(res)
  })
 }

}
