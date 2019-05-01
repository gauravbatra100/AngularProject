import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveCampaignsComponent } from './live-campaigns.component';

describe('LiveCampaignsComponent', () => {
  let component: LiveCampaignsComponent;
  let fixture: ComponentFixture<LiveCampaignsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveCampaignsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveCampaignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
