import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListActualitesComponent } from './list-actualites.component';

describe('ListActualitesComponent', () => {
  let component: ListActualitesComponent;
  let fixture: ComponentFixture<ListActualitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListActualitesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListActualitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
