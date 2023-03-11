import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  userName: string;
  password: string;
  errorlogin: string;
  constructor(private router: Router, private authService: AuthService) {
    this.userName = "";
    this.password = "";
    this.errorlogin = "";
  }

  onLoginSuccess() {
    this.router.navigate(['/dashboard']);
  }

  login() {
    this.errorlogin = "";
    if (this.authService.login(this.userName, this.password)) {
      this.onLoginSuccess();
    } else {
      this.errorlogin = "Incorrect username or password";
    }
  }

  change() {
    this.errorlogin = "";
  }

}
