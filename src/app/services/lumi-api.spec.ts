import { TestBed } from '@angular/core/testing';

import { LumiApi } from './lumi-api';

describe('LumiApi', () => {
  let service: LumiApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LumiApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
