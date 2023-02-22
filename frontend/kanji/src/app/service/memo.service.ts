import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SCHEME } from '../constant';
import { UtilsService } from './utils/utils.service';
import * as _ from "lodash";

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
    return this.http.post<any>(`${this.utils.getApiUrl()}plans/new`, {
      'userId': userId,
      'bookId': bookId,
      'title': title,
      'dailyMemo': dailyMemo,
      'scheme': scheme
    }, httpOptions);
  }

  getMemoPlans(userId: string): Observable<any> {
    return this.http.get<any>(`${this.utils.getApiUrl()}plans?userId=${userId}`);
  }

  getMemoPlanWithIndex(userId: string, index: number): Observable<any> {
    return this.http.get<any>(
      `${this.utils.getApiUrl()}plans/${index}?userId=${userId}`
    );
  }

  isToBeMemoToday(word: any): boolean {
    return word.inerval === 0;
  }

  getMemoList(words: any[], dailyMemo: number): any[] {
    let res: any[] = [];
    for (let i = 0; i < words.length; ++i) {
      const word = words[i];
      if (word.interval === 0) {
        res.push({
          'word': word,
          'index': i
        })
      }
      if (res.length === dailyMemo) {
        break;
      }
    }
    return res;
  }

  sm2(
    quality: number, 
    repitations: number,
    easeFactor: number,
    interval: number
  ): any {
    let inter = 0;
    let rep: number = repitations;
    let ef = easeFactor;
    if (quality >= 3) {
      if (repitations === 0) {
        inter = 0
      } else if (repitations === 1) {
        inter = 6
      } else if (repitations > 1) {
        inter = _.round(interval * easeFactor + 0.5);
      }
      rep += 1;
      ef = ef + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02))
    } else {
      rep = 0;
      interval = 1;
      ef = easeFactor;
    }
    if (easeFactor <= 1.3) {
      easeFactor = 1.3;
    }

    return {
      'interval': interval,
      'rep': rep,
      'ef': ef
    }

  }

  updateMemo(
    userId: string,
    planIndex: number,
    wordIndex: number,
    quality: number,
    rep: number,
    interval: number,
    ef: number
  ): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    return this.http.post<any>(`${this.utils.getApiUrl()}plans/${planIndex}/${wordIndex}`, {
      'userId': userId,
      'quality': quality,
      'rep': rep,
      'interval': interval,
      'ef': ef
    }, httpOptions)
  }
}
