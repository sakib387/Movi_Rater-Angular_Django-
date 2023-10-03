import { Component,Input,Output,EventEmitter } from '@angular/core';
import { Movie } from 'src/app/models/Movie';
import{FormControl,FormGroup} from '@angular/forms'
import { ApiService } from 'src/app/api.service';
@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})
export class MovieFormComponent {
  constructor(private apiservice:ApiService){}
  movieForm:any;
  id!:number;
  @Input() set movie(val:Movie){
    this.id=val.id
    console.log(this.id)
       this.movieForm=new FormGroup({
    title:new FormControl(val.title),
    description:new FormControl(val.description)
  })
  }
  @Output() createdMovie=new EventEmitter<Movie>()
  @Output() updatedMovie=new EventEmitter<Movie>()


  save(){
    if(this.id){
      this.apiservice.updateMovie(this.id,this.movieForm.value.title,this.movieForm.value.description).subscribe((res:Movie)=>{
       this.updatedMovie.emit(res)
      })

    }
    else{
      this.apiservice.createMovie(this.movieForm.value.title,this.movieForm.value.description).subscribe((res:Movie)=>{
        this.createdMovie.emit(res)
      })
    }
    
  }
}
