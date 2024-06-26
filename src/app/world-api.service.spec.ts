import { TestBed } from '@angular/core/testing';

import { WorldApiService } from './world-api.service';

describe('WorldApiService', () => {
  let service: WorldApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorldApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
