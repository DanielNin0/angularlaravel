import { TestBed } from '@angular/core/testing';

import { ApiCarouselService } from './api-carousel.service';

describe('ApiCarouselService', () => {
  let service: ApiCarouselService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiCarouselService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
