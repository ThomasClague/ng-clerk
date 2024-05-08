import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CLERK_PUBLISHABLE_KEY } from 'projects/ng-clerk/src/lib/injectors/injection-token';

export const hasKeyGuard: CanActivateFn = (route, state) => {
  const key = inject(CLERK_PUBLISHABLE_KEY);
  const router = inject(Router);

  console.log('keyGuard', key);

  if (key.length > 0) {
    return true;
  }

  router.navigateByUrl('/set-key');
  return false;
};
