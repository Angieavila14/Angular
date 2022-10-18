import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraMedidasComponent } from './calculadora-medidas.component';

describe('CalculadoraMedidasComponent', () => {
  let component: CalculadoraMedidasComponent;
  let fixture: ComponentFixture<CalculadoraMedidasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculadoraMedidasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculadoraMedidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
