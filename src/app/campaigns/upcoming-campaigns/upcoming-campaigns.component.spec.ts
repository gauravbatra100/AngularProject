import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingCampaignsComponent } from './upcoming-campaigns.component';

describe('UpcomingCampaignsComponent', () => {
  let component: UpcomingCampaignsComponent;
  let fixture: ComponentFixture<UpcomingCampaignsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcomingCampaignsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingCampaignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
