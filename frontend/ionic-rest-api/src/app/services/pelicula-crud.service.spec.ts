import { TestBed } from '@angular/core/testing';

import { PeliculaCrudService } from './pelicula-crud.service';

describe('PeliculaCrudService', () => {
  let service: PeliculaCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeliculaCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
