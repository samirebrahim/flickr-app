import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderBar } from './loader.component';

describe('LoaderBar', () => {
  let component: LoaderBar;
  let fixture: ComponentFixture<LoaderBar>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoaderBar ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaderBar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
