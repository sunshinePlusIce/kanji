import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-kanji-item',
  templateUrl: './kanji-item.component.html',
  styleUrls: ['./kanji-item.component.css']
})
export class KanjiItemComponent {
  @Input() kanji: any = null as any;
  
}
