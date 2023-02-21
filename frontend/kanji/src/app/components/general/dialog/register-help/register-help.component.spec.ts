import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterHelpComponent } from './register-help.component';

describe('RegisterHelpComponent', () => {
  let component: RegisterHelpComponent;
  let fixture: ComponentFixture<RegisterHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterHelpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
