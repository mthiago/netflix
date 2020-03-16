import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstItemComponent } from './first-item.component';

describe('FirstItemComponent', () => {
  let component: FirstItemComponent;
  let fixture: ComponentFixture<FirstItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
