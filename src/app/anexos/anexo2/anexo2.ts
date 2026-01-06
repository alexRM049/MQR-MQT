import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RedirectHP } from '../../redirect-hp/redirect-hp';
import { Footer } from '../../footer/footer';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core'; // Use this for standard JavaScript Date object

@Component({
  selector: 'app-anexo2',
  imports: [FormsModule, 
            RedirectHP,
            MatDatepickerModule,
            MatInputModule,
            MatNativeDateModule,
            Footer],
  templateUrl: './anexo2.html',
  styleUrl: '../anexos.css',
})
export class Anexo2Component {

  onSubmit(){

    console.log(this.formData)
  }
formData: any = {
  nombre: '',
  cedula: '',
  correo: '',
  fecha: '',
  telefono: '',
  lugar: '',
  tipo_accion: '',
  detalle: '',
}

  
}
