/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TokeninterceptorService } from './tokeninterceptor.service';

describe('Service: Tokeninterceptor', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TokeninterceptorService]
    });
  });

  it('should ...', inject([TokeninterceptorService], (service: TokeninterceptorService) => {
    expect(service).toBeTruthy();
  }));
});
