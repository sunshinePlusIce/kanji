import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalComponent } from './normal.component';

describe('NormalComponent', () => {
  let component: NormalComponent;
  let fixture: ComponentFixture<NormalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NormalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NormalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
