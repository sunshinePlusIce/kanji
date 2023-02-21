import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';
import { SidenavService } from 'src/app/service/sidenav.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{
  constructor(
    public sideNavService: SidenavService,
    private loginService: LoginService
  ) {
    
  }

  ngOnInit(): void {
    const userCookie = this.loginService.getUserCookie();
    if (userCookie) {
      this.loginService.search(userCookie).subscribe(resp => {
        this.loginService.setLoggedInUser(resp);
      })
    }
  }
}
