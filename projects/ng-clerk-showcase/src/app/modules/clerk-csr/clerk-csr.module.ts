import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { NgClerkCreateOrganisationComponent } from 'projects/ng-clerk/src/lib/components/create-organisation.component';
import { NgClerkOrganisationListComponent } from 'projects/ng-clerk/src/lib/components/organisation-list.component';
import { NgClerkOrganisationProfileComponent } from 'projects/ng-clerk/src/lib/components/organisation-profile.component';
import { NgClerkOrganisationSwitcherComponent } from 'projects/ng-clerk/src/lib/components/organisation-switcher.component';
import { NgClerkSignInComponent } from 'projects/ng-clerk/src/lib/components/sign-in.component';
import { NgClerkSignUpComponent } from 'projects/ng-clerk/src/lib/components/sign-up.component';
import { NgClerkUserButtonComponent } from 'projects/ng-clerk/src/lib/components/user-button.component';
import { NgClerkUserProfileComponent } from 'projects/ng-clerk/src/lib/components/user-profile.component';
import { CLERK_INITIALIZER } from 'projects/ng-clerk/src/lib/initializer';
import { ClerkCsrRoutingModule } from './clerk-csr-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ClerkCsrRoutingModule,
    NgClerkSignInComponent,
    NgClerkSignUpComponent,
    NgClerkUserButtonComponent,
    NgClerkUserProfileComponent,
    NgClerkOrganisationListComponent,
    NgClerkOrganisationSwitcherComponent,
    NgClerkCreateOrganisationComponent,
    NgClerkOrganisationProfileComponent,
    RouterModule.forChild([
      {
        path: '',
        loadComponent: () =>
          import('./examples/sign-in/sign-in.component').then(
            (m) => m.SignInComponent
          ),
      },
    ]),
  ],
  providers: [CLERK_INITIALIZER],
})
export class ClerkCsrModule {}
