import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAppartementComponent } from './list-appartement.component';

describe('ListAppartementComponent', () => {
  let component: ListAppartementComponent;
  let fixture: ComponentFixture<ListAppartementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAppartementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAppartementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
