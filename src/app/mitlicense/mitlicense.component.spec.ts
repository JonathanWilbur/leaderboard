import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MitlicenseComponent } from './mitlicense.component';

describe('MitlicenseComponent', () => {
  let component: MitlicenseComponent;
  let fixture: ComponentFixture<MitlicenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MitlicenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MitlicenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
