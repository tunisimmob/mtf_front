import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDevenezpropComponent } from './update-devenezprop.component';

describe('UpdateDevenezpropComponent', () => {
  let component: UpdateDevenezpropComponent;
  let fixture: ComponentFixture<UpdateDevenezpropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateDevenezpropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDevenezpropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
