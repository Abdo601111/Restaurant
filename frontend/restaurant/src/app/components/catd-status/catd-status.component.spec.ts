import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatdStatusComponent } from './catd-status.component';

describe('CatdStatusComponent', () => {
  let component: CatdStatusComponent;
  let fixture: ComponentFixture<CatdStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatdStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatdStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
