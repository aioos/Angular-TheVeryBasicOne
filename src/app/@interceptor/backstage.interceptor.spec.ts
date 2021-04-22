import { TestBed } from '@angular/core/testing';

import { BackstageInterceptor } from './backstage.interceptor';

describe('BackstageInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      BackstageInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: BackstageInterceptor = TestBed.inject(BackstageInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
