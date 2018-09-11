import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {routing} from './app.routing';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MyAccountComponent } from './components/my-account/my-account.component';
import {LoginService} from './services/service-login/login.service';
import {UserService} from './services/service-user/user.service';
import {UploadImageService} from './services/upload-image/upload-image.service';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    MyAccountComponent,
    MyProfileComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    routing,
    MaterialModule
  ],
  providers: [
    LoginService,
    UserService,
    UploadImageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
