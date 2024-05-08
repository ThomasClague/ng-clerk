import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CLERK_PUBLISHABLE_KEY } from 'projects/ng-clerk/src/lib/injectors/injection-token';

export const noKeyGuard: CanActivateFn = (route, state) => {
  const key = inject(CLERK_PUBLISHABLE_KEY);
  const router = inject(Router);

  console.log('keyGuard', key);

  if (key.length > 0) {
    router.navigateByUrl('/');
    return false;
  }

  return true;
};
