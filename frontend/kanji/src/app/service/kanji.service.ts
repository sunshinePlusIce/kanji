import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KanjiService {
  constructor(
    private http: HttpClient
  ) { 

  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    }
  }

  getKanjiList(): Observable<any[]> {
    return this.http.get<any[]>("/assets/kanji.json").pipe(
      catchError(this.handleError<any[]>('getKanjiList', [])),
    );
  }
}
