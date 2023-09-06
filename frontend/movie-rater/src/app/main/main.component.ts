import { Component, Input } from '@angular/core';
import { ApiService } from '../api.service';
import { tap } from 'rxjs/operators'; // Import the 'tap' operator

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  movies: any[] = [];

  constructor(private apiService: ApiService) {}
  movieSelected:any=''
  ngOnInit() {
    this.apiService.getMovies().pipe(
      tap(() => {
        console.log('I am from parent'); // Parent's console log
      })
    ).subscribe((res) => {
      this.movies = res;
    }, error => {
      console.log('Error:', error);
    });
  }
  seletedMovie(data:any){
    this.movieSelected=data
     console.log('parent selected movie ',this.movieSelected)
  }
}
