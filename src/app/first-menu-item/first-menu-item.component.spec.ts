import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstMenuItemComponent } from './first-menu-item.component';

describe('FirstMenuItemComponent', () => {
  let component: FirstMenuItemComponent;
  let fixture: ComponentFixture<FirstMenuItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstMenuItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstMenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
