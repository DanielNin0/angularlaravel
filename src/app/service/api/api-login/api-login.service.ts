import { Injectable } from '@angular/core';
import { LoginI } from "../../../models/login.interface";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { ResponseI } from 'src/app/models/response.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiLoginService {

  url:string = 'http://localhost:8000/';

  constructor(private http:HttpClient) { }


  loginByEmail(form:LoginI):Observable<ResponseI>{
    let direccion= this.url + "api/login";
    let Options={
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Accept': 'application/json'
      })
      
    }

    return this.http.post<ResponseI>(direccion, form, Options);
  }

  logout(): Observable<ResponseI> {
  let direccion = this.url + "api/logout";
  let Options = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token') // Agrega el token de autorización en el encabezado
    })
  }

  return this.http.post<ResponseI>(direccion, null, Options);
}

 
}
