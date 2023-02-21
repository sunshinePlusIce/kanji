import { Injectable } from '@angular/core';
import { GeneralUtilsService } from './general-utils.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  constructor(
    private generalUtils: GeneralUtilsService,
    private _snackBar: MatSnackBar
  ) {
  }

  getApiUrl(): string {
    return this.generalUtils.getApiUrl();
  }

  openSnackBar(message: string, action: string): void {
    this._snackBar.open(message, action);
  }
}
