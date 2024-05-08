import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { UserButtonProps } from '@clerk/types';
import { ClerkService } from '../services/clerk.service';

@Component({
  selector: 'ng-clerk-user-button',
  standalone: true,
  imports: [],
  template: '<div #ref></div>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class NgClerkUserButtonComponent implements AfterViewInit, OnDestroy {
  @ViewChild('ref') ref: ElementRef<HTMLDivElement> | null = null;
  @Input() props: UserButtonProps | undefined;

  constructor(private clerk: ClerkService) {}

  ngAfterViewInit(): void {
    if (!this.ref) {
      throw new Error('ClerkUserButtonComponent: ref is undefined');
    }

    if (this.clerk.clerk.user) {
      this.clerk.clerk.mountUserButton(this.ref.nativeElement, this.props);
    }
  }

  ngOnDestroy(): void {
    if (!this.ref) {
      throw new Error('ClerkUserButtonComponent: ref is undefined');
    }
    this.clerk.clerk.unmountUserButton(this.ref?.nativeElement);
  }
}
