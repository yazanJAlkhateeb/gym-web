import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionCheckComponent } from './subscription-check.component';

describe('SubscriberDetailsComponent', () => {
  let component: SubscriptionCheckComponent;
  let fixture: ComponentFixture<SubscriptionCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscriptionCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
