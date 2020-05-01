import { TestBed } from '@angular/core/testing';

import { ContratCustomerService } from './contrat-customer.service';

describe('ContratCustomerService', () => {
  let service: ContratCustomerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContratCustomerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
