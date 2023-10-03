import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders} from '@angular/common/http'
import { Movie } from './models/Movie';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseurl='http://127.0.0.1:8000/api/movie/'
  headers=new HttpHeaders({
    'content-Type':'application/json',
    Authorization:'token d80e7b0a3c4e6fe0d51c21afa87bbb268abdf6d3'
  })
  constructor(
    private http:HttpClient
  ) { }

  getMovies(){
    return this.http.get<Movie[]>(this.baseurl,{headers:this.headers})
  }
  getMovie(id:number){
    return this.http.get<Movie>(`${this.baseurl}${id}/`,{headers:this.headers})
  }
  createMovie(title:string,description:string){
    const body=JSON.stringify({title,description})
    return this.http.post<Movie>(`${this.baseurl}`,body,{headers:this.headers})
  }

  updateMovie(id:number,title:string,description:string){
    const body=JSON.stringify({title,description})
    return this.http.put<Movie>(`${this.baseurl}${id}/`,body,{headers:this.headers})
  }
deleteMovie(id:number){
 
    return this.http.delete(`${this.baseurl}${id}/`,{headers:this.headers})
  }
  rateMovies(rate:number,movieId:number){
    const body=JSON.stringify({stars:rate})
    return this.http.post(`${this.baseurl}${movieId}/rate_movie/`,body,{headers:this.headers})
  }
}
