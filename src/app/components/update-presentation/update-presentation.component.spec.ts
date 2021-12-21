import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePresentationComponent } from './update-presentation.component';

describe('UpdatePresentationComponent', () => {
  let component: UpdatePresentationComponent;
  let fixture: ComponentFixture<UpdatePresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatePresentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
