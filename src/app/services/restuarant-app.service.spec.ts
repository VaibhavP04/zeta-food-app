import { TestBed } from '@angular/core/testing';

import { RestuarantAppService } from './restuarant-app.service';

describe('RestuarantAppService', () => {
  let service: RestuarantAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestuarantAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
