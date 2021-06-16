import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/service/project.service'; 


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  url ="http://localhost:3000/project/"
  project:any

  ngOnInit():void {
    this.getAllData();
  }

  constructor(private ProjectService: ProjectService, private _http: HttpClient) { }
  onSubmit(data:any) {
    this.ProjectService.addData(data)
    console.log(data);
    return this.getAllData()
  }
  onDelete(id:number){
    this.ProjectService.deleteData(id).subscribe(d=>{
      console.log(d);
      console.log('Đã xóa thành công ' +id);
      this.getAllData();
    })
  }
  getAllData(){
    this._http.get(this.url).subscribe(p=>{
      this.project = p
      console.log(p);
      
    })
  }

}
