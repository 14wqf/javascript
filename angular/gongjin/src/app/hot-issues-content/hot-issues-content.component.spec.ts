import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotIssuesContentComponent } from './hot-issues-content.component';

describe('HotIssuesContentComponent', () => {
  let component: HotIssuesContentComponent;
  let fixture: ComponentFixture<HotIssuesContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotIssuesContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotIssuesContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
