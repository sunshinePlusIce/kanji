import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UtilsService } from './utils/utils.service';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(
    private http: HttpClient,
    private utils: UtilsService
  ) { }

  getBooks(): Observable<any[]> {
    return this.http.get<any[]>(`${this.utils.getApiUrl()}books`);
  }
}
