import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplyRightComponent } from './reply-right.component';

describe('ReplyRightComponent', () => {
  let component: ReplyRightComponent;
  let fixture: ComponentFixture<ReplyRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReplyRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReplyRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
