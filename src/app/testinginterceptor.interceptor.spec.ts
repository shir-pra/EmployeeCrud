import { TestBed } from '@angular/core/testing';

import { TestinginterceptorInterceptor } from './testinginterceptor.interceptor';

describe('TestinginterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      TestinginterceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: TestinginterceptorInterceptor = TestBed.inject(TestinginterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
