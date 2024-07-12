import { TestBed } from '@angular/core/testing';

import { GithubLookupService } from './github-lookup.service';

describe('GithubLookupService', () => {
  let service: GithubLookupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GithubLookupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
