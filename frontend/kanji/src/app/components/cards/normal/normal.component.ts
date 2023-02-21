import { Component, Input } from '@angular/core';
import { KanjiService } from 'src/app/service/kanji.service';

@Component({
  selector: 'app-normal',
  templateUrl: './normal.component.html',
  styleUrls: ['./normal.component.css']
})
export class NormalComponent {
  @Input() kanji: any = {} as any;

  constructor(
    private kanjiService: KanjiService,
  ) {
  }

}
