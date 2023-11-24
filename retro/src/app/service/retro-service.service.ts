import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RetroServiceService {
  
  url='http://localhost:3000/restaurant';
  constructor(private http : HttpClient) { }
  getList(){
    return this.http.get(this.url);
  }
  sendList(item:any){
    return this.http.post(this.url,item);
  }
  delItem(idx:number){
    return this.http.delete(`${this.url}/${idx}`);
  }
  getItem(idx:any){
    return this.http.get(`${this.url}/${idx}`);
  }
  updateList(idx:any,data:any){
    return this.http.put(`${this.url}/${idx}`,data);
  }
}
