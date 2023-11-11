import { TestBed } from '@angular/core/testing';

import { DailiesService } from './dailies.service';

describe('DailiesService', () => {
  let service: DailiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DailiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
