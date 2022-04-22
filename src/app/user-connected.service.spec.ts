import { TestBed } from '@angular/core/testing';

import { UserConnectedService } from './user-connected.service';

describe('UserConnectedService', () => {
  let service: UserConnectedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserConnectedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
