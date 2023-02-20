import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KanjiListComponent } from './kanji-list.component';

describe('KanjiListComponent', () => {
  let component: KanjiListComponent;
  let fixture: ComponentFixture<KanjiListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KanjiListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KanjiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
