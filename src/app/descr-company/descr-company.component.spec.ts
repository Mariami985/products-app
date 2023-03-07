import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescrCompanyComponent } from './descr-company.component';

describe('DescrCompanyComponent', () => {
  let component: DescrCompanyComponent;
  let fixture: ComponentFixture<DescrCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescrCompanyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescrCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
