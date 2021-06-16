import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { CreateComponent } from './admin/create/create.component';
import { EditComponent } from './admin/edit/edit.component';
import { CreatetaskComponent } from './admin/createtask/createtask.component';
import { TasklistComponent } from './tasklist/tasklist.component';
import { AdminComponent } from './admin/admin/admin.component';
import { AuthGuard } from './guard/auth.guard';
import { LoginComponent } from './login/login.component';



const routes: Routes = [
  {path:'',component:MainComponent, canActivate:[AuthGuard]},
  {path:'home',component:MainComponent,canActivate:[AuthGuard]},
  {path:'projectlist',component:ProductlistComponent,canActivate:[AuthGuard]},
  {path:'tasklist',component:TasklistComponent,canActivate:[AuthGuard]},
  {path:'admin/addproject',component:CreateComponent,canActivate:[AuthGuard]},
  {path:'admin/editproject',component:EditComponent,canActivate:[AuthGuard]},
  {path:'admin/addtask',component:CreatetaskComponent,canActivate:[AuthGuard]},
  {path:'login',component:LoginComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
