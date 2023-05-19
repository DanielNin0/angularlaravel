import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiCarouselService {

  url:string = 'http://localhost:8000/';
  constructor(private http:HttpClient) { }

  getCarousel():Observable<any>{
    let direccion = this.url + "api/carousel";
    return this.http.get<any>(direccion);
  }
}
