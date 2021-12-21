import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDevenezpropComponent } from './add-devenezprop.component';

describe('AddDevenezpropComponent', () => {
  let component: AddDevenezpropComponent;
  let fixture: ComponentFixture<AddDevenezpropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDevenezpropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDevenezpropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
