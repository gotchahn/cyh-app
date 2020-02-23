import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  username: string;
  password: string;
  success = true;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.success = true;

    // if logged in, go to home
  }

  onLoginClick(){
    console.log(this.username + " - " + this.password);
    this.authService.login(this.username, this.password);

    if(this.authService.isAuthenticated()){
      // good, let's go to home 
      this.router.navigate(["/home"]);
    }
    else{
      this.success = false;
    }
  }

}
