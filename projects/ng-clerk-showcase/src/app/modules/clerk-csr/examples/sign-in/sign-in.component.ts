import { Component, Inject } from '@angular/core';
import { ConfigService } from 'projects/ng-clerk-showcase/src/app/services/config.service';
import { NgClerkCreateOrganisationComponent } from 'projects/ng-clerk/src/lib/components/create-organisation.component';
import { NgClerkOrganisationListComponent } from 'projects/ng-clerk/src/lib/components/organisation-list.component';
import { NgClerkOrganisationProfileComponent } from 'projects/ng-clerk/src/lib/components/organisation-profile.component';
import { NgClerkOrganisationSwitcherComponent } from 'projects/ng-clerk/src/lib/components/organisation-switcher.component';
import { NgClerkSignInComponent } from 'projects/ng-clerk/src/lib/components/sign-in.component';
import { NgClerkSignUpComponent } from 'projects/ng-clerk/src/lib/components/sign-up.component';
import { NgClerkUserButtonComponent } from 'projects/ng-clerk/src/lib/components/user-button.component';
import { NgClerkUserProfileComponent } from 'projects/ng-clerk/src/lib/components/user-profile.component';
import { CLERK_PUBLISHABLE_KEY } from 'projects/ng-clerk/src/lib/injectors/injection-token';
import { ClerkService } from 'projects/ng-clerk/src/lib/services/clerk.service';
import { NgClerkSampleComponent } from 'projects/ng-clerk/src/public-api';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [
    NgClerkSampleComponent,
    NgClerkSignInComponent,
    NgClerkSignUpComponent,
    NgClerkUserButtonComponent,
    NgClerkUserProfileComponent,
    NgClerkOrganisationListComponent,
    NgClerkOrganisationSwitcherComponent,
    NgClerkCreateOrganisationComponent,
    NgClerkOrganisationProfileComponent,
  ],
  template: `<div class="grid h-screen grid-rows-[auto,1fr]">
    <nav
      class="flex w-full bg-blue-900 items-center justify-between border-b p-4 text-xl font-semibold"
    >
      <h1 class="text-3xl text-white">ng-clerk</h1>

      @if (this.clerkService.clerk.user) {
      <div>
        <ng-clerk-user-button></ng-clerk-user-button>
      </div>
      }
    </nav>
    <main class="overflow-y-scroll">
      <div class="container mx-auto p-10">
        <div class="flex flex-col gap-5">
          @if (this.clerkService.clerk.user) {
          <h1>Welcome {{ this.clerkService.clerk.user.fullName }}</h1>

          <ng-clerk-user-profile></ng-clerk-user-profile>
          } @else {
          <button (click)="this.clerkService.clerk.redirectToSignIn()">
            Sign in
          </button>

          <h1 class="text-3xl text-center">Please sign in to see the demo</h1>
          <div class="flex w-full h-full justify-center items-center">
            <ng-clerk-sign-up
              [props]="{ signInForceRedirectUrl: '/test' }"
            ></ng-clerk-sign-up>
          </div>

          }

          <div class="flex gap-5">
            <ng-clerk-create-organisation></ng-clerk-create-organisation>
            <ng-clerk-organisation-list></ng-clerk-organisation-list>
            <ng-clerk-organisation-profile></ng-clerk-organisation-profile>
            <ng-clerk-organisation-switcher></ng-clerk-organisation-switcher>
          </div>

          <div class="flex flex-col gap-5">
            <div>Key: {{ clerkPublishableKey }}</div>
            <button (click)="this.setConfig('testConfig')">set key</button>
          </div>
        </div>
      </div>
    </main>
  </div>`,
})
export class SignInComponent {
  constructor(
    public clerkService: ClerkService,
    private configService: ConfigService,
    @Inject(CLERK_PUBLISHABLE_KEY) public clerkPublishableKey: string
  ) {}

  setConfig(key: string): void {
    this.configService.setConfig(key);
    window.location.reload();
  }
}
