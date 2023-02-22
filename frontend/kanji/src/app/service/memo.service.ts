import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SCHEME } from '../constant';
import { UtilsService } from './utils/utils.service';

@Injectable({
  providedIn: 'root'
})
export class MemoService {

  constructor(
    private http: HttpClient,
    private utils: UtilsService
  ) { }


  createNewMemoPlan(
    userId: string,
    bookId: string,
    title: string,
    dailyMemo: number,
    scheme: SCHEME
  ): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    return this.http.post<any>(`${this.utils.getApiUrl()}plan/new`, {
      'userId': userId,
      'bookId': bookId,
      'title': title,
      'dailyMemo': dailyMemo,
      'scheme': scheme
    }, httpOptions);
  }
}
