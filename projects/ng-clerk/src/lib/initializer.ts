import { APP_INITIALIZER } from '@angular/core';
import { ClerkService } from './services/clerk.service';

function initializeClerk(clerkService: ClerkService): () => Promise<void> {
  return () => clerkService.init();
}

export const CLERK_INITIALIZER = {
  provide: APP_INITIALIZER,
  useFactory: initializeClerk,
  deps: [ClerkService],
  multi: true,
};
