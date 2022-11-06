import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodolistServiceService {

  url = "http://localhost:8080/Task"

 

  constructor(private http:HttpClient) { }

  sentData(data:any){

   let sentToBackend = this.http.post(`${this.url}/save`,data);

   return sentToBackend;
  }

  getData(){

    return this.http.get(`${this.url}/get`)

  }

  // delete by id function

  getDeleteById(id:number){

    return this.http.get(`${this.url}/delete/${id}`)

  }

  //get data by id

  getDataById(id:number){

   let result = this.http.get(`${this.url}/${id}`)

   return result;
  }

  

}
