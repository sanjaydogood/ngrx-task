import { TestBed } from '@angular/core/testing';

import { TranslateBridgeService } from './translate-bridge.service';

describe('TranslateBridgeService', () => {
  let service: TranslateBridgeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TranslateBridgeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
