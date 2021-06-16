
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-createtask',
  templateUrl: './createtask.component.html',
  styleUrls: ['./createtask.component.css']
})
export class CreatetaskComponent {

  url ="http://localhost:3000/task/"
  task:any

  ngOnInit():void {
    this.getAllData();
  }

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
