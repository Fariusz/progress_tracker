import { TestBed } from '@angular/core/testing';

import { ActivitiesListsService } from './activities-lists.service';

describe('ActivitiesListsService', () => {
  let service: ActivitiesListsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActivitiesListsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
