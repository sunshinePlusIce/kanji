import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KanjiItemComponent } from './kanji-item.component';

describe('KanjiItemComponent', () => {
  let component: KanjiItemComponent;
  let fixture: ComponentFixture<KanjiItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KanjiItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KanjiItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
