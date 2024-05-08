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
import { SignUpProps } from '@clerk/types';
import { ClerkService } from '../services/clerk.service';

@Component({
  selector: 'ng-clerk-sign-up',
  standalone: true,
  imports: [],
  template: '<div #ref></div>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class NgClerkSignUpComponent implements AfterViewInit, OnDestroy {
  @ViewChild('ref') ref: ElementRef<HTMLDivElement> | null = null;
  @Input() props: SignUpProps | undefined;

  private clerk = inject(ClerkService);

  ngAfterViewInit(): void {
    if (!this.ref) {
      throw new Error('ClerkSignUpComponent: ref is undefined');
    }

    this.clerk.clerk.mountSignUp(this.ref.nativeElement, this.props);
  }

  ngOnDestroy(): void {
    if (!this.ref) {
      throw new Error('ClerkSignUpComponent: ref is undefined');
    }

    this.clerk.clerk.unmountSignUp(this.ref?.nativeElement);
  }
}
