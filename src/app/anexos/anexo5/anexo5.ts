import { Component, WritableSignal, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChangeDetectionStrategy } from '@angular/core';
import { RedirectHP } from '../../redirect-hp/redirect-hp';
import { Footer } from '../../footer/footer';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core'; // Use this for standard JavaScript Date object
import { anexo5 } from './anexo5.model';

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

  eMnumeroCaso = signal<string> ('');
  eMUnidad_Ejecutora = signal<string> ('');
  eMsubproyecto = signal<string> ('');
  eMconprosub = signal<string> ('');
  eMencargado = signal<string> ('');
  eMfecha_hora_incidente = signal<string> ('');
  eMlugar = signal<string> ('');
  eMfecha_hora_recepcion = signal<string> ('');
  eMmedios_Recepcion = signal<string> ('');
  eMconfidencial_Concentimiento = signal<string> ('');
  eMquien_Reporta = signal<string> ('');
  eMorg = signal<string> ('');
  eMcontratista = signal<string> ('');
  eMsubcontratista = signal<string> ('');
  eMproveedor = signal<string> ('');
  eMtipo_Reporte = signal<string> ('');
  eMdetalle = signal<string> ('');
  eMlugar_caso = signal<string> ('');
  eMfecha_caso = signal<string> ('');
  eMgenero_sobreviviente = signal<string> ('');
  eMedad_sobreviviente = signal<string> ('');
  eMrelacion_sobreviviente = signal<string> ('');
  eMgenero_agresor = signal<string> ('');
  eMedad_genero = signal<string> ('');
  eMrelacion_agresor = signal<string> ('');
  eMnombreresponsable = signal<string> ('');
  eMcargoresonsable = signal<string> ('');

  formsData: anexo5 ={
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
  fecha_caso: '',
  genero_sobreviviente: '',
  edad_sobreviviente: '',
  relacion_sobreviviente: '',
  genero_agresor: '',
  edad_genero: '',
  relacion_agresor: '',
  adicional: '',
  nombreresponsable: '',
  cargoresonsable: '',
  lugar_caso: '',
  }
recepcion='';

errorMessage() {
  if(!this.formsData.numeroCaso){
    this.eMnumeroCaso.set("Favor de digitar el codigo del caso")
  }else{
    this.eMnumeroCaso.set('');
  }
  if (!this.formsData.Unidad_Ejecutora) {
    this.eMUnidad_Ejecutora.set("Favor de inidcar la unidad ejecutora")
  }else{
    this.eMUnidad_Ejecutora.set('');
  }
  if(!this.formsData.subproyecto){
    this.eMsubproyecto.set("Favor de inidcar el nombre del subproyecto")
  }else{
    this.eMsubproyecto.set('')
  }
  if(!this.formsData.conprosub){
    this.eMconprosub.set('Favor indicar el Nombre del contratista, proveedor o subcontratista')
  }

}

  onSubmit () {
    console.log(this.formsData)
  }
}
