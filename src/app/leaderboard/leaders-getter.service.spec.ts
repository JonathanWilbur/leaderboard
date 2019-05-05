import { TestBed, inject } from '@angular/core/testing';

import { LeadersGetterService } from './leaders-getter.service';

describe('LeadersGetterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LeadersGetterService]
    });
  });

  it('should be created', inject([LeadersGetterService], (service: LeadersGetterService) => {
    expect(service).toBeTruthy();
  }));
});
