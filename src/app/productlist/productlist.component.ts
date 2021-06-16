import { Component, OnInit } from '@angular/core';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { ProjectService } from '../service/project.service';


@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  url ="http://localhost:3000/project/"
  project:any

  ngOnInit():void {
    this.getAllData();
  }

  page:number = 1;

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
