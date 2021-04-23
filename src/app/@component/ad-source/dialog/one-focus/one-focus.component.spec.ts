import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneFocusComponent } from './one-focus.component';

describe('OneFocusComponent', () => {
  let component: OneFocusComponent;
  let fixture: ComponentFixture<OneFocusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneFocusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneFocusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
