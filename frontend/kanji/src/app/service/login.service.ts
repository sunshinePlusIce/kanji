import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable, Subject } from 'rxjs';
import { environments } from 'src/environments/environement';
import { UtilsService } from './utils/utils.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loggedIn: boolean = false;
  loggedInUser: any = {} as any;

  constructor(
    private utils: UtilsService,
    private http: HttpClient,
    private cookie: CookieService
  ) { }

  register(username: string): Observable<any> {
    let url = `${this.utils.getApiUrl()}user/${username}`;
    const headers = { 'Access-Control-Allow-Origin': '*'};
    return this.http.post<any>(url,{}, { headers });
  }

  login(username: string): Observable<any> {
    let url = `${this.utils.getApiUrl()}user/${username}`;
    return this.http.get<any>(url);
  }

  search(id: string): Observable<any> {
    let url = `${this.utils.getApiUrl()}user/id/${id}`;
    return this.http.get<any>(url);
  }

  getUserCookie(): string {
    return this.cookie.get('user');
  }

  setUserCookie(id: string) {
    this.cookie.set('user', id);
    this.search(id).subscribe(resp => {
      this.setLoggedInUser(resp);
    })
  }

  setLoggedIn(v: boolean): boolean {
    this.loggedIn = v;
    return this.loggedIn;
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  setLoggedInUser(user: any): void {
    this.loggedInUser = user;
    this.setLoggedIn(true)
  }

  getLoggedInUser(): any {
    // return this.loggedInUser;
    return this.loggedInUser;
  }

  logout(): void {
    this.setLoggedInUser({} as any);
    this.setLoggedIn(false);
    this.cookie.delete('user');
  }
}
