import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  baseUrl="http://localhost:3000/task/"
  constructor(private http: HttpClient) { }

  getAPI(endPoint: string){
    let url = this.baseUrl + endPoint;
    return this.http.get(url);
  }

  getByID(endPoint: string, id: number){
    let url = this.baseUrl + endPoint + "/" + id;
    return this.http.get(url);

  }  
  addData(data:any){
    return this.http.post(this.baseUrl,data).subscribe(result =>{
      console.log(result);
      
    })
  }
  deleteData(id:number){
    return this.http.delete(this.baseUrl+id)
  }
  editData(id:number){
    
  }
  
}
