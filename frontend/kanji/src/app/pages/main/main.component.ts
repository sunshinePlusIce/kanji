import { Component } from '@angular/core';
import { SidenavService } from 'src/app/service/sidenav.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  constructor(
    public sideNavService: SidenavService
  ) {
    
  }
}
