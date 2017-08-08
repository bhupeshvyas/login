import { Component, OnInit } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

    name:string='';
    password:string='';
//  model: any = {};
    loading = false;
    user:User;


    login(f:Event) {
      console.log(f);
        this.loading = true;
        console.log(this.name + " and password : " +this.password);
        if(this.name !=='' && this.password!== ''){
          this.loading = false;
        }
        // this.authenticationService.login(this.model.username, this.model.password)
        //     .subscribe(
        //         data => {
        //             this.router.navigate([this.returnUrl]);
        //         },
        //         error => {
        //             this.alertService.error(error);
        //             this.loading = false;
        //         });
    }
}
