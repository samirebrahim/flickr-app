import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPhotosComponent } from './view-photos.component';

describe('ViewPhotosComponent', () => {
  let component: ViewPhotosComponent;
  let fixture: ComponentFixture<ViewPhotosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPhotosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
