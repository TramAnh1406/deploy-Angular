import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    // DashboardComponent,
    LoginComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    // RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    // HttpClientModule
  ],
  // bootstrap:[LoginComponent],
  // exports: [RouterModule]
})
export class AdminModule { }
