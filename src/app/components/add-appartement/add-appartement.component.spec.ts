import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAppartementComponent } from './add-appartement.component';

describe('AddAppartementComponent', () => {
  let component: AddAppartementComponent;
  let fixture: ComponentFixture<AddAppartementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAppartementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAppartementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
