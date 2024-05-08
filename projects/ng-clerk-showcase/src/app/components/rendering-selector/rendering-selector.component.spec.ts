import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderingSelectorComponent } from './rendering-selector.component';

describe('RenderingSelectorComponent', () => {
  let component: RenderingSelectorComponent;
  let fixture: ComponentFixture<RenderingSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RenderingSelectorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RenderingSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
