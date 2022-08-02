import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-materia',
  templateUrl: './formulario-materia.component.html',
  styleUrls: ['./formulario-materia.component.css']
})
export class FormularioMateriaComponent implements OnInit {

  formularioMateria: FormGroup; 

  constructor(private fb: FormBuilder) { 
    this.formularioMateria = this.fb.group({
      nombre: ['', [Validators.required, Validators.maxLength(100), Validators.minLength(6)]],
      anio: [0, [Validators.required, Validators.pattern(/^\d+$/), Validators.min(1), Validators.max(5)]],
      codigo_materia: ['', [Validators.required]],
      horas_semanales: [0, [Validators.required, Validators.pattern(/^\d+$/), Validators.min(1), Validators.max(50)]],
      horas_totales: [0, [Validators.required, Validators.pattern(/^\d+$/), Validators.min(1), Validators.max(500)]],
      observaciones: ['', [Validators.maxLength(500)]]
    });
  }

  ngOnInit(): void {
  }

  enviarForm() {
    console.log(this.formularioMateria.value);
  }

}
