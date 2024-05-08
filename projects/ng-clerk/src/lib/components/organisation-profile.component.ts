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
import { OrganizationProfileProps } from '@clerk/types';
import { ClerkService } from '../services/clerk.service';

@Component({
  selector: 'ng-clerk-organisation-profile',
  standalone: true,
  imports: [],
  template: '<div #ref></div>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class NgClerkOrganisationProfileComponent
  implements AfterViewInit, OnDestroy
{
  @ViewChild('ref') ref: ElementRef<HTMLDivElement> | null = null;
  @Input() props: OrganizationProfileProps | undefined;

  private clerk = inject(ClerkService);

  ngAfterViewInit(): void {
    if (!this.ref) {
      throw new Error('ClerkCreateOrganisationComponent: ref is undefined');
    }

    this.clerk.clerk.mountOrganizationProfile(
      this.ref.nativeElement,
      this.props
    );
  }

  ngOnDestroy(): void {
    if (!this.ref) {
      throw new Error('ClerkOrganisationProfileComponent: ref is undefined');
    }

    this.clerk.clerk.unmountCreateOrganization(this.ref?.nativeElement);
  }
}
