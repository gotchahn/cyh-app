import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn = new BehaviorSubject<boolean>(false);

  constructor() { }

  isAuthenticated(){
    return this.loggedIn;
  }

  login(username: string, password: string){
    if( username === "carlos" && password === "miche" ){
      this.loggedIn.next(true);
      localStorage.setItem('currentUser', username);
      return true;
    }
    return false;
  }

  logout(){
    this.loggedIn.next(false);
    localStorage.removeItem('currentUser');
  }
}
