import { TestBed } from '@angular/core/testing';

import { AuthCtrlGuard } from './auth-ctrl.guard';

describe('AuthCtrlGuard', () => {
  let guard: AuthCtrlGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthCtrlGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
