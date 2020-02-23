import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn = false;

  constructor() { }

  isAuthenticated(){
    return this.loggedIn;
  }

  login(username: string, password: string){
    this.loggedIn = username === "carlos" && password === "miche"
  }

  logout(){
    this.loggedIn = false;
  }
}
