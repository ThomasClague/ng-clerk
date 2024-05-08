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
import { OrganizationSwitcherProps } from '@clerk/types';
import { ClerkService } from '../services/clerk.service';

@Component({
  selector: 'ng-clerk-organisation-switcher',
  standalone: true,
  imports: [],
  template: '<div #ref></div>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class NgClerkOrganisationSwitcherComponent
  implements AfterViewInit, OnDestroy
{
  @ViewChild('ref') ref: ElementRef<HTMLDivElement> | null = null;
  @Input() props: OrganizationSwitcherProps | undefined;

  private clerk = inject(ClerkService);

  ngAfterViewInit(): void {
    if (!this.ref) {
      throw new Error('ClerkOrganisationSwitcherComponent: ref is undefined');
    }

    this.clerk.clerk.mountOrganizationSwitcher(
      this.ref.nativeElement,
      this.props
    );
  }

  ngOnDestroy(): void {
    if (!this.ref) {
      throw new Error('ClerkOrganisationSwitcherComponent: ref is undefined');
    }

    this.clerk.clerk.unmountOrganizationSwitcher(this.ref?.nativeElement);
  }
}
