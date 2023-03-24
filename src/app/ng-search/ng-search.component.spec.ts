import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSearchComponent } from './ng-search.component';

describe('NgSearchComponent', () => {
  let component: NgSearchComponent;
  let fixture: ComponentFixture<NgSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
