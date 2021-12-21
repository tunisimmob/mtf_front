import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAppartementComponent } from './update-appartement.component';

describe('UpdateAppartementComponent', () => {
  let component: UpdateAppartementComponent;
  let fixture: ComponentFixture<UpdateAppartementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateAppartementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAppartementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
