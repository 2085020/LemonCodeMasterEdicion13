import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { CrudComponent } from './pages/internal/crud/crud.component';
import { DashboardComponent } from './pages/internal/dashboard/dashboard.component';
import { GalleryComponent } from './pages/internal/gallery/gallery.component';
import { ProfileComponent } from './pages/internal/profile/profile.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path : '',
    component: HomeComponent
  },
  {
    path : 'login',
    component: LoginComponent
  },
  {
    path : 'about',
    component: AboutComponent
  },
  {
    path : 'dashboard',
    component: DashboardComponent
  },
  {
    path : 'gallery',
    component: GalleryComponent
  },
  {
    path : 'profile',
    component: ProfileComponent
  },
  {
    path : 'crud',
    component: CrudComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
