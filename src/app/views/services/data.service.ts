import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http:HttpClient) { }



  getAllstudents(){
    return this.http.get('http://localhost:3003/monitoring_platform')  
  }
}
