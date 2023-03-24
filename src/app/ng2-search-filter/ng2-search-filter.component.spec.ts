import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng2SearchFilterComponent } from './ng2-search-filter.component';

describe('Ng2SearchFilterComponent', () => {
  let component: Ng2SearchFilterComponent;
  let fixture: ComponentFixture<Ng2SearchFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ng2SearchFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng2SearchFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
