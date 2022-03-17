import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemServiceService {

  constructor(private http:HttpClient) { }


  getList(){
    return this.http.get("http://localhost:3000/posts")
  }

  updateItem(data:any){
    return this.http.put(`http://localhost:3000/posts/${data.id}`,{'title':data.title,'author':data.author})
  }

  deleteItem(id:number){
    return this.http.delete(`http://localhost:3000/posts/${id}`);
  }

  addItem(item:any){
    return this.http.post(`http://localhost:3000/posts/`,item);
  }
}

