import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdSourceComponent } from './ad-source.component';

describe('AdSourceComponent', () => {
  let component: AdSourceComponent;
  let fixture: ComponentFixture<AdSourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdSourceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdSourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
