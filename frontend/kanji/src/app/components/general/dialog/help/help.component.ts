import { Component} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent {
  constructor(public dialog: MatDialog) {}
  openDialog() {
    this.dialog.open(HelpDialogComponent);
  }
}


@Component({
  selector: 'app-help-dialog-content',
  templateUrl: './help_dialog_template.html'
})
export class HelpDialogComponent {

}
