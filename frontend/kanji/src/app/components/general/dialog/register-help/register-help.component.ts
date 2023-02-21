import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-register-help',
  templateUrl: './register-help.component.html',
  styleUrls: ['./register-help.component.css']
})
export class RegisterHelpComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(RegisterHelpDialog);
  }
}

@Component({
  selector: 'app-register-help-dialog',
  templateUrl: './register-dialog-template.html'
})
export class RegisterHelpDialog {

}