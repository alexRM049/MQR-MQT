import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RedirectHP } from '../../redirect-hp/redirect-hp';
import { Footer } from '../../footer/footer';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core'; // Use this for standard JavaScript Date object

@Component({
  selector: 'app-anexo3',
  imports: [FormsModule, 
            RedirectHP,
            MatDatepickerModule,
            MatInputModule,
            MatNativeDateModule,
            Footer],
  templateUrl: './anexo3.html',
  styleUrl: '../anexos.css',
})
export class Anexo3Component {

  onSubmit(){
    console.log(this.formsData)
  }

  formsData: any ={
  Unidad_Ejecutora:'',
  fecha: '',
  nombre: '',
  apellido: '',
  domicilio:'',
  distrito: '',
  acciones: '',
  nombreresponsable: '', 
  cargoresponsable: '',
  firmaResponsable: '',
  nombreinteresado: '',
  cargointeresado: '',
  firmainteresado: '',
  }

  
}
