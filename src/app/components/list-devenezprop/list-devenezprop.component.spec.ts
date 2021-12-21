import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDevenezpropComponent } from './list-devenezprop.component';

describe('ListDevenezpropComponent', () => {
  let component: ListDevenezpropComponent;
  let fixture: ComponentFixture<ListDevenezpropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDevenezpropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDevenezpropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
