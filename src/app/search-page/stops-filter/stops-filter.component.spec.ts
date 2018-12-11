import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StopsFilterComponent } from './stops-filter.component';

describe('StopsFilterComponent', () => {
  let component: StopsFilterComponent;
  let fixture: ComponentFixture<StopsFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StopsFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StopsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
