import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { KanjiService } from 'src/app/service/kanji.service';
import { KanjiInfo } from 'src/app/model/KanjiInfo';

@Component({
  selector: 'app-kanji-detail',
  templateUrl: './kanji-detail.component.html',
  styleUrls: ['./kanji-detail.component.css']
})
export class KanjiDetailComponent implements OnInit {
  kanji: any = {} as any;
  loaded: boolean = false;
  kanjiInfo: KanjiInfo[] = [];
  cols: string[] = [
    "accent",
    "example"
  ]

  constructor(
    private kanjiService: KanjiService,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
      this.getKanji();
  }

  getKanji() {
    this.kanjiService.getKanjiList().subscribe(kanjiList => {
      for (let kanji of kanjiList) {
        for (let alter of kanji.kanji) {
          if (alter === this.route.snapshot.paramMap.get('kanji')) {
            this.kanji = kanji;
            this.kanjiInfo = this.generateKanjiInfomation();
            console.log(this.kanjiInfo)
            this.loaded = true;
          }
        }
      }
    })
  } 

  generateKanjiInfomation(): KanjiInfo[] {
    let res: KanjiInfo[] = [];
    for (let i = 0; i < this.kanji.accent.length; ++i) {
      res.push({
        'accent': this.kanji.accent[i],
        'example': this.kanji.example[i]
      })
    }
    return res;
  }

  getKanjiMainChar(): string {
    return this.kanji.kanji[0];
  }

  getKanjiAlternative(): string {
    return this.kanji.kanji.slice(1, this.kanji.kanji.length).join(', ');
  }

}
