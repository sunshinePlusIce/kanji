import { TestBed } from '@angular/core/testing';

import { KanjiService } from './kanji.service';

describe('KanjiService', () => {
  let service: KanjiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KanjiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
