import { Component, OnInit } from '@angular/core';
import { AuthService } from '../sessions/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isAuthenticated = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.loggedIn.subscribe( (isAuth: boolean) => {
      this.isAuthenticated = isAuth;
    });
  }

  onLogout(){
    this.authService.logout();
  }

}
