import { Component } from '@angular/core';
import { SidenavService } from 'src/app/service/sidenav.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  constructor(
    public sidenavService: SidenavService
  ) {

  }
}
