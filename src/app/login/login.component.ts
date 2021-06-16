import { Location } from '@angular/common';
import { Component, forwardRef, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  listUsers: any;

  loginForm!: FormGroup;

  constructor(private userService: UserService, private location: Location) { }

  ngOnInit(): void {
    this.loadUsers();
    this.loginForm = new FormGroup({
      'name': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.required)
    });
  }

  loadUsers(){
    this.userService.getAPI('users').subscribe(d=>{
      console.log(d);
      this.listUsers = d;
    }, error =>{
      console.log(error);
      
    });
  }

  token:any;

  onSubmit(){
    console.log('ssdsd');
    return true;
  }

  submitLogin(): void{
    if(this.loginForm.invalid){
      console.log('Invalid');
      return;
    }
    let data = this.loginForm.value;
    for(let u of this.listUsers){
      //kiểm tra điều kiện
      if(u.name == data.name && u.password == data.password){
        console.log(u);
        this.token ={
          'name': u.name,
          'role': u.role
        }
        localStorage.setItem('user',JSON.stringify(this.token));
        window.location.href = 'home';
        break;
        
      }else{
        console.log('Sai tài khoản hoặc mật khẩu');
                
      }
    }
    
  }
}
