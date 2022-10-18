import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-calculadora-medidas',
  templateUrl: './calculadora-medidas.component.html',
  styleUrls: ['./calculadora-medidas.component.scss']
})
export class CalculadoraMedidasComponent implements OnInit {

  entradaNumero : number = 0;
  unidadDelNumero : string = '';
  unidadAConvertir : string = '';
  resultado : number = 0;
  formulario: FormGroup;
  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      entradaNumero: new FormControl(0, [Validators.required, Validators.min(0)]),
      unidadDelNumero: new FormControl(''),
      unidadAConvertir : new FormControl('')
    });
   }

  ngOnInit(): void { 
    
  }

  calculo(){
    this.entradaNumero = this.formulario.get('entradaNumero')?.value;
    this.unidadDelNumero = this.formulario.get('unidadDelNumero')?.value;
    this.unidadAConvertir = this.formulario.get('unidadAConvertir')?.value;
    this.resultado =this.entradaNumero*(Number.parseInt(this.unidadDelNumero)/Number.parseFloat(this.unidadAConvertir));
  }

}
