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
  eMedad_agresor = signal<string> ('');
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
  edad_agresor: '',
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
  }else{
    this.eMconprosub.set('');
  }
  if(!this.formsData.encargado){
    this.eMencargado.set('Favor de indicar el Nombre y firma del personal encargado del registro de incidentes de EyAS/ASx en la localidad')
  }else {
    this.eMencargado.set('');
  }
  if(!this.formsData.fecha_hora_incidente){
    this.eMfecha_hora_incidente.set("Favor de indicar la fecha y hora de incidente")
  }else{
    this.eMfecha_hora_incidente.set('');
  }
  if(!this.formsData.lugar){
    this.eMlugar.set('Favor de inidicar el lugar de registro')
  }else{
    this.eMlugar.set('');
  }
  if(!this.formsData.fecha_hora_recepcion){
    this.eMfecha_hora_recepcion.set("Favor de indicar la fecha y hora de la recepcion")
  }else{
    this.eMfecha_hora_recepcion.set('');
  }
  if(!this.formsData.confidencial_Concentimiento){
    this.eMconfidencial_Concentimiento.set('Favor inidcar si es confidencial, anonimo o consentimiento a dar su identidad')
  } else{
    this.eMconfidencial_Concentimiento.set('')
  }
  if(!this.formsData.quien_Reporta) {
    this.eMquien_Reporta.set("Favor de indicar quien es el que reporta el caso")
  }else{
    this.eMquien_Reporta.set('')
  }
  if(!this.formsData.org){
    this.eMorg.set("Favor de indicar la organización")
  }else{
    this.eMorg.set('');
  }
  if(!this.formsData.contratista) {
    this.eMcontratista.set('Favor de indicar el contratista')
  }
  if(!this.formsData.subcontratista){
    this.eMsubcontratista.set('Favor de indicar el subcontratista')
  }else{
    this.eMsubcontratista.set('');
  }
  if(!this.formsData.proveedor){
    this.eMproveedor.set("favor de indicar el proveedor de servicios")
  }else{
    this.eMproveedor.set(''); 
  }
  if(!this.formsData.tipo_Reporte){
    this.eMtipo_Reporte.set("Favor de indicar el tipo de caso")
  }else{
    this.eMtipo_Reporte.set('');
  }
  if(!this.formsData.detalle){
    this.eMdetalle.set("Explique los detalles del inicidente")
  }else{
    this.eMdetalle.set('');
  }
  if(!this.formsData.lugar_caso){
    this.eMlugar_caso.set("Favor de inidcar el lugar donde ocurrió el caso")
  }else{
    this.eMlugar_caso.set('')
  }
  if(!this.formsData.fecha_caso){
    this.eMfecha_caso.set('Favor de indicar la fecha donde ocurrió el caso')
  }else{
    this.eMfecha_caso.set('');
  }
  if(!this.formsData.genero_sobreviviente){
    this.eMgenero_sobreviviente.set("Favor de indicar el genero del sobreviviente")
  }else{
    this.eMedad_sobreviviente.set('')
  }
  if(!this.formsData.relacion_sobreviviente){
    this.eMrelacion_sobreviviente.set("Favor indicar la relacion del sobreviviente")
  }else{
    this.eMrelacion_sobreviviente.set('')
  }
  if(!this.formsData.genero_agresor){
    this.eMgenero_agresor.set('Favor indicar el genero del agresor')
  }else{
    this.eMgenero_agresor.set('')
  }
  if(!this.formsData.edad_agresor){
    this.eMedad_agresor.set('Favor de indicar el edad del agresor')
  }
  if(!this.formsData.relacion_agresor){
    this.eMrelacion_agresor.set('Favor de indicar la relación del agresor')
  }
  if(!this.formsData.nombreresponsable) {
    this.eMnombreresponsable.set('Favor de indicar el nombre del responsable')
  }
  if(!this.formsData.cargoresonsable) {
    this.eMcargoresonsable.set('Favor de indicar el cargo del responsable')
  }
}

  onSubmit () {

    this.errorMessage();

    console.log(this.formsData)
  }
}
