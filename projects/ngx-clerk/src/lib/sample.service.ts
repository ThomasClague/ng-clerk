import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NgxClerkSampleService {
  public getBestFramework(): string {
    return 'Angular';
  }
}
