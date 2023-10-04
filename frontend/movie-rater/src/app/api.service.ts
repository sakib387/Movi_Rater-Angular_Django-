import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders} from '@angular/common/http'
import { Movie } from './models/Movie';
import{CookieService}from 'ngx-cookie-service'
interface Token{
  token:string
}
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseurl='http://127.0.0.1:8000/api/movie/'
  rooturl='http://127.0.0.1:8000/'
  headers=new HttpHeaders({
    'content-Type':'application/json',
    //Authorization:'token d80e7b0a3c4e6fe0d51c21afa87bbb268abdf6d3'
  })
  constructor(
    private http:HttpClient,
    private cookieService:CookieService
  ) { }

  getMovies(){
    return this.http.get<Movie[]>(this.baseurl,{headers:this.getHeaders()})
  }
  getMovie(id:number){
    return this.http.get<Movie>(`${this.baseurl}${id}/`,{headers:this.getHeaders()})
  }
  createMovie(title:string,description:string){
    const body=JSON.stringify({title,description})
    return this.http.post<Movie>(`${this.baseurl}`,body,{headers:this.getHeaders()})
  }

  updateMovie(id:number,title:string,description:string){
    const body=JSON.stringify({title,description})
    return this.http.put<Movie>(`${this.baseurl}${id}/`,body,{headers:this.getHeaders()})
  }
deleteMovie(id:number){
 
    return this.http.delete(`${this.baseurl}${id}/`,{headers:this.getHeaders()})
  }
  rateMovies(rate:number,movieId:number){
    const body=JSON.stringify({stars:rate})
    return this.http.post(`${this.baseurl}${movieId}/rate_movie/`,body,{headers:this.getHeaders()})
  }
  login(authData:any){
    const body=JSON.stringify(authData)
    return this.http.post<Token>(`${this.rooturl}auth/`,body,{headers:this.headers})

  }
  register(authData:any){
    const body=JSON.stringify(authData)
    return this.http.post<Token>(`${this.rooturl}api/user/`,body,{headers:this.headers})

  }
  getHeaders(){
    const token=this.cookieService.get('mr-token')
    return new HttpHeaders({
      'content-Type':'application/json',
       Authorization:`token ${token}`
    })
  }
}
