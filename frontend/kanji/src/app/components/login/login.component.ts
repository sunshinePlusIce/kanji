import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';
import { UtilsService } from 'src/app/service/utils/utils.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = "";
  constructor(
    private loginService: LoginService,
    private utils: UtilsService,
    private cookie: CookieService,
    private router: Router
  ) {

  }

  ngOnInit(): void {
      
  }

  login(): void {
    this.loginService.login(this.username).subscribe(resp => {
      this.cookie.set('user', resp.userId)
      this.loginService.setLoggedInUser(resp);
      this.router.navigate(['/']);
    }, (e: HttpErrorResponse) => {
      this.utils.openSnackBar(e.error.message, 'OK');
    })
  }
}
