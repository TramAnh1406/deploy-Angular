import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  token:any;
  data:any;

  constructor(){
    this.token = localStorage.getItem('user');
    this.data = JSON.parse(this.token);
  }

  canActivate():boolean{
    //Kiểm tra toekn, nếu đúng token thì vào, không sẽ bảo lỗi
    if(!this.token){
      window.location.href = 'login';
      return false;
    }
    return true;
  }


}
  

