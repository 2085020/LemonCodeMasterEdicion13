import { Component } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

  privatePages =['/crud' , '/dashboard' , '/gallery', "/profile"];
  isPublic = true;
  currentUrl = '';
  constructor(private router: Router, private route: ActivatedRoute, private authService: AuthService) {


    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isPublic = !this.authService.isLogged();

        if (this.privatePages.indexOf(event.url) > -1 && this.isPublic) {
          this.router.navigate(["/"]);
        }
      }
    });

  }
}
