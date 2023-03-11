import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutComponent } from './layout-base/layout/layout.component';
import { PublicHeaderComponent } from './layout-base/public-header/public-header.component';
import { PrivateHeaderComponent } from './layout-base/private-header/private-header.component';
import { FooterComponent } from './layout-base/footer/footer.component';
import { PublicMenuComponent } from './layout-base/public-menu/public-menu.component';
import { PrivateMenuComponent } from './layout-base/private-menu/private-menu.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { AboutComponent } from './pages/about/about.component';
import { DashboardComponent } from './pages/internal/dashboard/dashboard.component';
import { GalleryComponent } from './pages/internal/gallery/gallery.component';
import { CrudComponent } from './pages/internal/crud/crud.component';
import { ProfileComponent } from './pages/internal/profile/profile.component';
import { MatCardModule} from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button'

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    PublicHeaderComponent,
    PrivateHeaderComponent,
    FooterComponent,
    PublicMenuComponent,
    PrivateMenuComponent,
    HomeComponent,
    LoginComponent,
    AboutComponent,
    DashboardComponent,
    GalleryComponent,
    CrudComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
