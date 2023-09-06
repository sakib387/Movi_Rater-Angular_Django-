import { Component, Input ,Output,EventEmitter} from '@angular/core';
import { ApiService } from 'src/app/api.service';
@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent {
  
@Input() movies:any=[]
@Output() seletedMovie=new EventEmitter<any>()

constructor(private apiService:ApiService){}
 ngOnInit(){
 
 }
 movieclicked(data:any){
   
    this.seletedMovie.emit(data)
 }
}
