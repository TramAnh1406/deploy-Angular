import { Component, OnInit } from '@angular/core';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { TaskService } from '../service/task.service';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit{
  url ="http://localhost:3000/task/"
  task:any

  ngOnInit():void {
    this.getAllData();
  }

  page:number = 1;
  

  constructor(private TaskService: TaskService, private _http: HttpClient) { }
  onSubmit(data:any) {
    this.TaskService.addData(data)
    console.log(data);
    return this.getAllData()
  }
  onDelete(id:number){
    this.TaskService.deleteData(id).subscribe(d=>{
      console.log(d);
      console.log('Đã xóa thành công ' +id);
      this.getAllData();
    })
  }
  getAllData(){
    this._http.get(this.url).subscribe(p=>{
      this.task = p
      console.log(p);
      
    })
  }

}
