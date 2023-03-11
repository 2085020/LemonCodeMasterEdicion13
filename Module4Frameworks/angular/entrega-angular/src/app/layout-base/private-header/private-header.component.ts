import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-private-header',
  templateUrl: './private-header.component.html',
  styleUrls: ['./private-header.component.scss']
})
export class PrivateHeaderComponent {

  username: string;
  constructor(private authService : AuthService, private router: Router) {
    this.username = authService.getUserName();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(["/"]);
  }

}
