import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CLERK_INITIALIZER } from 'projects/ng-clerk/src/lib/initializer';
import { ClerkSsrRoutingModule } from './clerk-ssr-routing.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, ClerkSsrRoutingModule],
  providers: [CLERK_INITIALIZER],
})
export class ClerkSsrModule {}
