import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../../services/service-login/login.service';
import {UserService} from '../../services/service-user/user.service';
import { Appconst } from '../../constants/app-const';
@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {

  private serverPath = Appconst.serverPath;
  private loginError: boolean = false;
  private loggedIn = false;
  private credential = {'username': '' , 'password': ''};
  private emailSent: boolean = false;
  private usernameExists: boolean;
  private emailExists: boolean;
  private username: string;
  private email: string;
  private emailNotExists: boolean = false;
  private forgetPasswordEmailSent: boolean;
  private recoverEmail: string;

  constructor(
    private loginService: LoginService,
    private userService: UserService,
    private router: Router
  ) { }

  onLogin() {
    this.loginService.sendCredential(this.credential.username, this.credential.password).subscribe(
      res => {
        console.log(res);
        localStorage.setItem('xAuthToken', res.json().token);
        this.loggedIn = true;
        location.reload();
        this.router.navigate(['/home']);
      },
      error => {
        this.loggedIn = false;
        this.loginError = true;
        console.log('error');
      }
    );
  }

  onNewAccount() {
    this.usernameExists = false ;
    this.emailExists = false ;
    this.emailSent = false ;

    this.userService.newUser(this.username, this.email).subscribe(
      res => {
        console.log(res);
        this.emailSent = true;
      },
      error => {
        console.log(error.text());
        let errorMessage = error.text();
        if(errorMessage === 'usernameExists')this.usernameExists= true;
        if(errorMessage === 'emailExists')this.emailExists= true;

      }
    );
  }

  onForgetPassword(){
    this.forgetPasswordEmailSent = false;
    this.emailNotExists = false;

    this.userService.retrievePassword(this.recoverEmail).subscribe(
      res => {
        console.log(res);
        this.emailSent = true;
        this.forgetPasswordEmailSent = true;
      },
      error => {
        console.log(error.text());
        let errorMessage = error.text();
        if(errorMessage === 'Email not found')this.emailExists= true;
      }
    );
  }

  ngOnInit() {
    this.loginService.checkSession().subscribe(
      res => {
        this.loggedIn = true ;
      },
      error => {
        this.loggedIn = false;
      }
    );
  }

}
