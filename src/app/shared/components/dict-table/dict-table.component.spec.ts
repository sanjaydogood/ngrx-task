import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DictTableComponent } from './dict-table.component';

describe('DictTableComponent', () => {
  let component: DictTableComponent;
  let fixture: ComponentFixture<DictTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DictTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DictTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
