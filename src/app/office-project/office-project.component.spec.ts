import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeProjectComponent } from './office-project.component';

describe('OfficeProjectComponent', () => {
  let component: OfficeProjectComponent;
  let fixture: ComponentFixture<OfficeProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficeProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficeProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
