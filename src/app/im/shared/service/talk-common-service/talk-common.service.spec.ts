import { TestBed } from '@angular/core/testing';

import { TalkCommonService } from './talk-common.service';

describe('TalkCommonService', () => {
  let service: TalkCommonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TalkCommonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
