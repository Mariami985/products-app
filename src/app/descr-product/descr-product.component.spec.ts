import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescrProductComponent } from './descr-product.component';

describe('DescrProductComponent', () => {
  let component: DescrProductComponent;
  let fixture: ComponentFixture<DescrProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescrProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescrProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
