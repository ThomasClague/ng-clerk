import { FactoryProvider } from '@angular/core';
import { CLERK_PUBLISHABLE_KEY } from 'projects/ng-clerk/src/lib/injectors/injection-token';
import { ConfigService } from '../services/config.service';

export const clerkConfigTestProvider: FactoryProvider = {
  provide: CLERK_PUBLISHABLE_KEY,
  useFactory: (configService: ConfigService) => configService.getConfig(),
  deps: [ConfigService],
};
