import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddActualitesComponent } from './add-actualites.component';

describe('AddActualitesComponent', () => {
  let component: AddActualitesComponent;
  let fixture: ComponentFixture<AddActualitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddActualitesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddActualitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
