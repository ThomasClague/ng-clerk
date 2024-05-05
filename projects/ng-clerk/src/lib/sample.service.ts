import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NgClerkSampleService {
  public getBestFramework(): string {
    return 'Angular';
  }
}
