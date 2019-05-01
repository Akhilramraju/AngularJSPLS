import { Component } from '@angular/core'
import { AuthService } from './auth.service';
import { Router } from '@angular/router'
@Component({
    templateUrl:'./login.component.html',
    styles: [`
    em { fload:right; color:#E05c65; padding-left:10px;  }
    `]

})
export class LoginComponent{
    constructor(private authService:AuthService, private router:Router){

    }
    username 
     password
     mouseoverLogin

    login(formValues){
       this.authService.loginUser(formValues.username,formValues.password)
       this.router.navigate(['events'])
    }
    cancel(){
        this.router.navigate(['events'])
    }

}