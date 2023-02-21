import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AvatarService } from 'src/app/service/avatar.service';
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
    private avatarService: AvatarService,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.avatarService.getRandomAvatar('hello').subscribe(resp => {
      console.log(resp)
    }, (e: HttpErrorResponse) => {
      console.log(e)
    })
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
