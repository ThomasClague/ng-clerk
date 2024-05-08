import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CLERK_PUBLISHABLE_KEY } from 'projects/ng-clerk/src/lib/injectors/injection-token';
import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'app-set-key-component',
  standalone: true,
  imports: [],
  templateUrl: './set-key.component.html',
})
export class SetKeyComponent {
  private configService = inject(ConfigService);
  private router = inject(Router);
  public clerkPublishableKey = inject(CLERK_PUBLISHABLE_KEY);

  setConfig(key: string): void {
    if (!key) {
      return;
    }

    this.configService.setConfig(key);
    this.router.navigateByUrl('/').then(() => window.location.reload());
  }
}
