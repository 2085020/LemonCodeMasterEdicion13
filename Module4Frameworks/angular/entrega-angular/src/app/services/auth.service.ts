import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  actualUsername: string | null;
  constructor() {

    this.actualUsername = localStorage.getItem("username");
  }

  login (userName: string, password:string):boolean {
    if (userName === "master@lemoncode.net" && password == "12345678") {
      this.actualUsername = userName;
      localStorage.setItem("username", userName);
      return true;
    }
    return false;
  }

  logout() {
    this.actualUsername = "";
    localStorage.setItem("username", "");
  }

  isLogged():boolean {
    return this.actualUsername!== null && this.actualUsername !== "" ;
  }

  getUserName():string {
    return this.actualUsername?this.actualUsername:"";
  }
}
