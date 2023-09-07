import { Component,Input } from '@angular/core';
import { Movie } from 'src/app/models/Movie';
import{FormControl,FormGroup} from '@angular/forms'
@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})
export class MovieFormComponent {
  @Input() movie:Movie|undefined
  movieForm=new FormGroup({
    title:new FormControl(''),
    description:new FormControl('')
  })
  save(){
    console.log(this.movieForm.value)
  }
}
