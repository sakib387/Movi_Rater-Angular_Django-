import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders} from '@angular/common/http'
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
    return this.http.get<any>(this.baseurl,{headers:this.headers})
  }
}
