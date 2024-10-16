import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NpcsAgustinService {

  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get<any>('https://www.moogleapi.com/api/v1/characters')
  }

  getData(){
    return this.http.get<any>('https://www.moogleapi.com/api/v1/characters')
  }
}
