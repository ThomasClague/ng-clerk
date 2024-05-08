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
import { UserProfileProps } from '@clerk/types';
import { ClerkService } from '../services/clerk.service';

@Component({
  selector: 'ng-clerk-user-profile',
  standalone: true,
  imports: [],
  template: '<div #ref></div>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class NgClerkUserProfileComponent implements AfterViewInit, OnDestroy {
  @ViewChild('ref') ref: ElementRef<HTMLDivElement> | null = null;
  @Input() props: UserProfileProps | undefined;

  constructor(private clerk: ClerkService) {}

  ngAfterViewInit(): void {
    if (!this.ref) {
      throw new Error('ClerkUserProfileComponent: ref is undefined');
    }

    if (this.clerk.clerk.user) {
      this.clerk.clerk.mountUserProfile(this.ref.nativeElement, this.props);
    }
  }

  ngOnDestroy(): void {
    if (!this.ref) {
      throw new Error('ClerkUserProfileComponent: ref is undefined');
    }
    this.clerk.clerk.unmountUserProfile(this.ref?.nativeElement);
  }
}
