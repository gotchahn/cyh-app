import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  hide = true;
  username: string;
  password: string;
  authSub: any;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {

    // if logged in, go to home
  }

  onLoginClick(loginForm: NgForm){
    console.log(this.username + " - " + this.password);
    this.authService.login(this.username, this.password);

    this.authSub = this.authService.loggedIn.subscribe((isAuth: boolean) => {
      if(isAuth){
        // good, let's go to home 
        loginForm.reset();
        this.router.navigate(["/home"]);
      }
      else{
        
        Swal.fire({
          title: 'Error!',
          text: 'Credenciales No Validas',
          icon: 'error',
          confirmButtonText: 'Ok'
        })
      }
    });
  }

  ngOnDestroy(){
    this.authSub.unsubscribe();
  }

}
