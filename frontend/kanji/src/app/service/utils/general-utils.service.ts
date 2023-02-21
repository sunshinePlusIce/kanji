import { Injectable } from '@angular/core';
import { environments } from 'src/environments/environement';

@Injectable({
  providedIn: 'root'
})
export class GeneralUtilsService {

  constructor() { }

  getApiUrl(): string {
    return environments.apiUrl;
  }
}
