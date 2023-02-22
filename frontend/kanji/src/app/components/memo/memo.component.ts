import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SCHEME } from 'src/app/constant';
import { BooksService } from 'src/app/service/books.service';
import { LoginService } from 'src/app/service/login.service';
import { MemoService } from 'src/app/service/memo.service';

@Component({
  selector: 'app-memo',
  templateUrl: './memo.component.html',
  styleUrls: ['./memo.component.css']
})
export class MemoComponent implements OnInit {
  dailyMemo: number = 30;
  started: boolean = false;
  books: any[] = []
  loaded: boolean = false;
  title: string = '';
  scheme: SCHEME = SCHEME.ALPHA;
  bookId: string = "";
  


  constructor(
    private bookService: BooksService,
    private memoService: MemoService,
    private loginService: LoginService,
  ) {}

  private _checkCreateMemoPlanForm(): boolean {
    return  !(
      this.title.length === 0 
      || this.bookId.length === 0
      || this.dailyMemo <= 0
      || !this.loginService.getLoggedInUser()
    );
  }

  createMemoPlan(
  ) {
    this.memoService.createNewMemoPlan(
      this.loginService.getLoggedInUser()._id,
      this.bookId,
      this.title,
      this.dailyMemo,
      this.scheme
    ).subscribe(resp => {
      const index = resp.index;
      
    }, (e: HttpErrorResponse) => {
    })
  }


  ngOnInit(): void {
      this.bookService.getBooks().subscribe(resp => {
        this.books = resp;
        console.log(this.books)
        this.loaded = true;
      })
  }
}
