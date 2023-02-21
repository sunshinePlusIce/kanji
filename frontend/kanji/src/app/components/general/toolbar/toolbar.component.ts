import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';
import { SidenavService } from 'src/app/service/sidenav.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  constructor(
    public sidenavService: SidenavService,
    private loginService: LoginService,
  ) {

  }

  isLoggedIn(): boolean {
    return this.loginService.isLoggedIn();
  }

  getLoggedInUser(): any {
    return this.loginService.getLoggedInUser();
  }

  logout(): void {
    this.loginService.logout();
  }
}
