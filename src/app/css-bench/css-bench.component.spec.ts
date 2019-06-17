import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CssBenchComponent } from './css-bench.component';

describe('CssBenchComponent', () => {
  let component: CssBenchComponent;
  let fixture: ComponentFixture<CssBenchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CssBenchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CssBenchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
