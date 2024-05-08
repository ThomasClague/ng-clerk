import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  clerkKey = new BehaviorSubject<string | null>(null);

  setConfig(key: string): void {
    this.clerkKey.next(key);
    localStorage.setItem('clerkKey', key);
  }

  getConfig(): string {
    return this.clerkKey.value ?? localStorage.getItem('clerkKey') ?? '';
  }
}
