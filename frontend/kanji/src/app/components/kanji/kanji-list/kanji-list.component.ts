import { Component, HostListener, OnInit } from '@angular/core';
import { KanjiService } from 'src/app/service/kanji.service';

@Component({
  selector: 'app-kanji-list',
  templateUrl: './kanji-list.component.html',
  styleUrls: ['./kanji-list.component.css']
})
export class KanjiListComponent implements OnInit {
  kanjiList: any[] = [];
  limit: number = 100;
  step: number = 30;

  constructor(
    private kanjiService: KanjiService
  ) {

  }

  ngOnInit(): void {
    this.kanjiService.getKanjiList().subscribe(resp => {
      this.kanjiList = resp;
    })
  }

  showMore(step: number): number {
    this.limit += step;
    return this.limit;
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    const triggerAt: number = 128; 
    /* perform an event when the user has scrolled over the point of 128px from the bottom */
    if (document.body.scrollHeight - (window.innerHeight + window.scrollY) <= triggerAt) {
      this.showMore(this.step);
    }
  }
}
