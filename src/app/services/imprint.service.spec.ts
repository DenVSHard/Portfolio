import { TestBed } from '@angular/core/testing';
import { ImprintService } from './imprint.service';

describe('ImprintService', () => {
  let service: ImprintService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImprintService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});