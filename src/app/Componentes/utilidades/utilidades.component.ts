import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-utilidades',
  templateUrl: './utilidades.component.html',
  styleUrls: ['./utilidades.component.scss']
})
export class UtilidadesComponent implements OnInit {
  Ganancia: number=0;
  Valordeventa: number=0;
  formulario: FormGroup;
  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      Valordecompra: new FormControl(0, [Validators.required, Validators.min(0)]),
      utilidadoganancia: new FormControl(0, [Validators.required, Validators.min(0)]),
      IVA: new FormControl(0, [Validators.required, Validators.min(0), Validators.max(100)]),

    })
  }

  ngOnInit(): void {
  }
  calculo() {
    debugger;
    var Valordecompra = this.formulario.get('Valordecompra')?.value;
    var utilidadoganancia = this.formulario.get('utilidadoganancia')?.value;
    var IVA = this.formulario.get('IVA')?.value;
    this.Ganancia = (Valordecompra * utilidadoganancia)/100;
    this.Valordeventa= this.Ganancia+Valordecompra+Valordecompra*IVA/100;

  }
  Borrar(){
    this.formulario = this.fb.group({
      Valordecompra: new FormControl(0, [Validators.required, Validators.min(0)]),
      utilidadoganancia: new FormControl(0, [Validators.required, Validators.min(0)]),
      IVA: new FormControl(0, [Validators.required, Validators.min(0), Validators.max(100)]),

    });
    this.Ganancia =0;
    this.Valordeventa=0;

  }
}
