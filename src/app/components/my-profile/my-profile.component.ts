import { Component, OnInit } from '@angular/core';
import {Appconst} from '../../constants/app-const';
import { User } from '../../models/user';
import {UserService} from '../../services/service-user/user.service';
import {LoginService} from '../../services/service-login/login.service';
import { Router } from '@angular/router';
import {UploadImageService} from '../../services/upload-image/upload-image.service';


@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  private userId: number;
  private serverPath = Appconst.serverPath;
  private dataFetched = false;
  private loginError: boolean;
  private loggedIn: boolean;
  private credential = {'username': '', 'password': ''};
  private user: User = new User();
  private updateSuccess: boolean;
  private newPassword: string;
  private incorrectPassword: boolean;
  private currentPassword: string;


  constructor(
    private loginService: LoginService,
    private uploadImageService: UploadImageService,
    private router: Router,
    private userService: UserService,
  ) { }

  onUpdateUserInfo () {
  	this.userService.updateUserInfo(this.user, this.newPassword, this.currentPassword).subscribe(
  		res => {
        console.log(res);
        console.log(this.user);
        this.uploadImageService.upload(this.user.id);
        console.log(res.text());
  			this.updateSuccess = true;
  		},
  		error => {
  			console.log(error.text());
  			let errorMessage = error.text();
  			if(errorMessage==="Incorrect current password!") this.incorrectPassword=true;
  		}
  	);
  }

  getCurrentUser() {
  	this.userService.getCurrentUser().subscribe(
  		res => {
        this.user = res.json();
        console.log(this.user);
        console.log(this.user.authorities[0]);
  			this.dataFetched = true;
  		},
  		err => {
  			console.log(err);
  		}
  	);
  }
  ngOnInit() {

  	this.loginService.checkSession().subscribe(
  		res => {
  			this.loggedIn = true;
  		},
  		error => {
  			this.loggedIn = false;
  			console.log("inactive session");
  			this.router.navigate(['/myAccount']);
  		}
  	);

  	this.getCurrentUser();
  }

}
