import { Inject, Injectable } from '@angular/core';
import { Clerk } from '@clerk/clerk-js';
import { CLERK_PUBLISHABLE_KEY } from '../injectors/injection-token';

@Injectable({
  providedIn: 'root',
})
export class ClerkService {
  public readonly clerk!: Clerk;

  constructor(
    @Inject(CLERK_PUBLISHABLE_KEY) public clerkPublishableKey: string
  ) {
    if (clerkPublishableKey) {
      this.clerk = new Clerk(clerkPublishableKey);
    } else {
      console.error('Clerk publishable key is required');
    }
  }

  public async init(): Promise<void> {
    if (this.clerk) {
      return await this.clerk.load();
    } else {
      console.error('Clerk is not initialized');
    }
    return await Promise.resolve();
  }
}
