import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdConfComponent } from './ad-conf.component';

describe('AdConfComponent', () => {
  let component: AdConfComponent;
  let fixture: ComponentFixture<AdConfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdConfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdConfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
