import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/service/books.service';

@Component({
  selector: 'app-glossary',
  templateUrl: './glossary.component.html',
  styleUrls: ['./glossary.component.css']
})
export class GlossaryComponent implements OnInit {
  books: any[] = [];
  constructor(
    private bookService: BooksService
  ) {

  }

  ngOnInit(): void {
    this.bookService.getBooks().subscribe(resp => {
      this.books = resp;
    })
  } 
}
