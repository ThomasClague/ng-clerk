import { ChangeDetectionStrategy, Component } from '@angular/core';

import { NgClerkSampleService } from './sample.service';

@Component({
  selector: 'ng-clerk-sample',
  template: `<h1>
    The best framework is {{ sampleService.getBestFramework() }}
  </h1>`,
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgClerkSampleComponent {
  constructor(public sampleService: NgClerkSampleService) {}
}
