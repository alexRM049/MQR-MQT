import { Component, WritableSignal, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChangeDetectionStrategy } from '@angular/core';
import { RedirectHP } from '../../redirect-hp/redirect-hp';
import { Footer } from '../../footer/footer';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core'; // Use this for standard JavaScript Date object


@Component({
  selector: 'app-anexo5',
  imports: [FormsModule, 
            RedirectHP,
            MatDatepickerModule,
            MatInputModule,
            MatNativeDateModule,
            Footer],
  templateUrl: './anexo5.html',
  styleUrl: '../anexos.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Anexo5Component {

  selectedOption: WritableSignal<string | null> = signal(null);
  selectedOption2: WritableSignal<string | null> = signal(null);

  formsData: any ={
  numeroCaso:'',
  Unidad_Ejecutora:'',
  subproyecto: '',
  conprosub: '',
  encargado: '',
  fecha_hora_incidente: '',
  lugar: '',
  fecha_hora_recepcion: '',
  medios_Recepcion:'',
  recepcion_Escrita:'',
  confidencial_Concentimiento:'',
  quien_Reporta: '',
  otro: '',
  especifique: '',
  org: '',
  contratista: '',
  subcontratista: '',
  proveedor: '',
  tipo_Reporte: '',
  detalle: '',
  documento: null, //los inputs de documentos se tratan de manera diferente
  lugar_fecha_caso: '',
  genero_sobreviviente: '',
  edad_sobreviviente: '',
  relacion_sobreviviente: '',
  genero_agresor: '',
  edad_genero: '',
  relacion_agresor: '',
  adicional: '',
  nombreresponsable: '',
  cargoresonsable: '',
  
  }
recepcion='';


  onSubmit () {
    console.log(this.formsData)
  }
}
