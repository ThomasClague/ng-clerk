import { ChangeDetectionStrategy, Component } from '@angular/core';

import { NgxClerkSampleService } from './sample.service';

@Component({
  selector: 'ngx-clerk-sample',
  template: `<h1>
    The best framework is {{ sampleService.getBestFramework() }}
  </h1>`,
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxClerkSampleComponent {
  constructor(public sampleService: NgxClerkSampleService) {}
}
