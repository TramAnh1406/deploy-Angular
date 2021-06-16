import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  url="http://localhost:3000/project/"
  constructor(private http: HttpClient) { }

  addData(data:any){
    return this.http.post(this.url,data).subscribe(result =>{
      console.log(result);
      
    })
  }
  deleteData(id:number){
    return this.http.delete(this.url+id)
  }
}
