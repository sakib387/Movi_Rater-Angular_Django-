import { Component, Input ,Output,EventEmitter} from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Movie } from 'src/app/models/Movie';
import{faEdit,faTrash} from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent {
  
@Input() movies:Movie[]|undefined
@Output() seletedMovie=new EventEmitter<any>()
@Output() editedMovie=new EventEmitter<any>()
@Output() newdMovie=new EventEmitter()
delete=faTrash
edit=faEdit
constructor(private apiService:ApiService){}
 ngOnInit(){
 
 }
 movieclicked(data:Movie){
   
    this.seletedMovie.emit(data)
 }
 editMovie(data:Movie){
  this.editedMovie.emit(data)
 }
 newMovie(){
  this.newdMovie.emit()
 }
}
