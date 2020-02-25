import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  username: string;
  password: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {

    // if logged in, go to home
  }

  onLoginClick(){
    console.log(this.username + " - " + this.password);
    this.authService.login(this.username, this.password);

    this.authService.loggedIn.subscribe((isAuth: boolean) => {
      if(isAuth){
        // good, let's go to home 
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

}
