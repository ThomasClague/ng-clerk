import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';

import { CLERK_PUBLISHABLE_KEY } from './injectors/injection-token';
import { NgClerkSampleService } from './sample.service';

@Component({
  selector: 'ng-clerk-sample',
  template: `<h1>
      The best framework is {{ sampleService.getBestFramework() }}
    </h1>
    <div>{{ this.clerkPublishableKey }}</div>`,
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgClerkSampleComponent {
  constructor(
    public sampleService: NgClerkSampleService,
    @Inject(CLERK_PUBLISHABLE_KEY) public clerkPublishableKey: string
  ) {}
}
