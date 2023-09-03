import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseurl='http://127.0.0.1:8000/api/movies/'
  constructor(
    private http:HttpClient
  ) { }

  getMovies(){
    return this.http.get(this.baseurl)
  }
}
