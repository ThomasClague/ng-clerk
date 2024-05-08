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
import { CreateOrganizationProps } from '@clerk/types';
import { ClerkService } from '../services/clerk.service';

@Component({
  selector: 'ng-clerk-create-organisation',
  standalone: true,
  imports: [],
  template: '<div #ref></div>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class NgClerkCreateOrganisationComponent
  implements AfterViewInit, OnDestroy
{
  @ViewChild('ref') ref: ElementRef<HTMLDivElement> | null = null;
  @Input() props: CreateOrganizationProps | undefined;

  private clerk = inject(ClerkService);

  ngAfterViewInit(): void {
    if (!this.ref) {
      throw new Error('ClerkCreateOrganisationComponent: ref is undefined');
    }

    this.clerk.clerk.mountCreateOrganization(
      this.ref.nativeElement,
      this.props
    );
  }

  ngOnDestroy(): void {
    if (!this.ref) {
      throw new Error('ClerkCreateOrganisationComponent: ref is undefined');
    }

    this.clerk.clerk.unmountCreateOrganization(this.ref?.nativeElement);
  }
}
