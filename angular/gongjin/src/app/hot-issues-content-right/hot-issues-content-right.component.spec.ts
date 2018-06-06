import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotIssuesContentRightComponent } from './hot-issues-content-right.component';

describe('HotIssuesContentRightComponent', () => {
  let component: HotIssuesContentRightComponent;
  let fixture: ComponentFixture<HotIssuesContentRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotIssuesContentRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotIssuesContentRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
