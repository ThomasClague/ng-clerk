import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  ViewChild,
  ViewEncapsulation,
  inject,
} from '@angular/core';
import { SignInProps } from '@clerk/types';
import { ClerkService } from '../services/clerk.service';

@Component({
  selector: 'ng-clerk-sign-in',
  standalone: true,
  imports: [],
  template: '<div #ref></div>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class NgClerkSignInComponent implements AfterViewInit, OnDestroy {
  @ViewChild('ref') ref: ElementRef<HTMLDivElement> | null = null;
  @Input() props: SignInProps | undefined;

  private clerk = inject(ClerkService);

  ngAfterViewInit(): void {
    if (!this.ref) {
      throw new Error('ClerkSignInComponent: ref is undefined');
    }

    this.clerk.clerk.mountSignIn(this.ref.nativeElement, this.props);
  }

  ngOnDestroy(): void {
    if (!this.ref) {
      throw new Error('ClerkSignInComponent: ref is undefined');
    }

    this.clerk.clerk.unmountSignIn(this.ref?.nativeElement);
  }
}
