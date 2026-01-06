import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RedirectHP } from '../../redirect-hp/redirect-hp';
import { Footer } from '../../footer/footer';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core'; // Use this for standard JavaScript Date object

@Component({
  selector: 'app-anexo4',
  imports: [FormsModule, 
            RedirectHP,
            MatDatepickerModule,
            MatInputModule,
            MatNativeDateModule,
            Footer],
  templateUrl: './anexo4.html',
  styleUrl: '../anexos.css',
})
export class Anexo4Component {
 formsData: any ={
  numeroCaso:'',
  Unidad_Ejecutora: '',
  fecha: '',
  nombre: '',
  apellido: '',
  domicilio: '',
  distrito: '',
  descripcioGeneral: '',
  resolucion: '',
  si_acepto: '',
  no_acepto: '',
  nombreresponsable: '',
  cargorespnsable: '',
  firmaresponsable: '',
  nombreinteresado: '',
  cargointeresado: '',
  firmainteresado: ''
 } 

  onSubmit () {
    console.log(this.formsData)
  }
}
