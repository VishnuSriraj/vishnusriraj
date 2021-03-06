import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { KnowmeComponent } from './knowme.component';

describe('KnowmeComponent', () => {
  let component: KnowmeComponent;
  let fixture: ComponentFixture<KnowmeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ KnowmeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnowmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
