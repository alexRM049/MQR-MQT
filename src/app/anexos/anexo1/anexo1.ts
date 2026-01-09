
import { Component, WritableSignal, signal, ɵunwrapWritableSignal } from '@angular/core';
import { FormGroup, FormsModule } from '@angular/forms';
import { ChangeDetectionStrategy } from '@angular/core';
import { RedirectHP } from '../../redirect-hp/redirect-hp';
import { Footer } from '../../footer/footer';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core'; // Use this for standard JavaScript Date object
import { MatStepperModule } from '@angular/material/stepper';
import { AnimationCallbackEvent } from '@angular/core';

import { anexo1 } from './anexo1.model';

@Component({
  selector: 'app-anexo1',
  imports: [FormsModule, 
            RedirectHP, 
            MatDatepickerModule, 
            MatInputModule,
            MatNativeDateModule,
            Footer],
  templateUrl: './anexo1.html',
  styleUrl: '../anexos.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})


export class Anexo1Component {

  isEscritoCliked = false;
  isDateToday = true;
  file = '';
  eMNumeroCaso = signal<string> ('');
  eMUnidad_Ejecutora = signal<string> ('');
  eMmedios_recepcion = signal<string> ('');
  eMtipo_Caso = signal<string> ('');
  eMNombreResponsable = signal<string> ('');
  eMcargo = signal<string> ('');

  isNumeroCaso = true;
  isUnidad_Ejecutora = true;
  ismedios_recepcion = true;
  istipo_Caso = true;
  isNombreResponsable = true;
  iscargo = true;


  eMfecha_hora_recepcion : WritableSignal<string | null> = signal(null);
  selectedOption: WritableSignal<string | null> = signal(null);

  isShown = signal(false);

  toggle() {
    this.isShown.update((isShown)=>!isShown)
  }

  leavingFn(event: AnimationCallbackEvent) {
    event.animationComplete();
  }

  clickEscrito() {
    this.isEscritoCliked= true;
  }

  clickNoEscrito() {
    this.isEscritoCliked=false;
  }

formData: anexo1 ={
  numeroCaso:'',
  Unidad_Ejecutora: '',
  isToday: '',
  fecha_hora_recepcion: new Date,
  hora_recepcion: '',
  lugar: '',
  recibido_por:'',
  medios_recepcion: '',
  carta_Recepcion:'',
  nombre: '',
  apellido: '',
  ciudad: '',
  correoT: '',
  otro: '',
  tipo_Caso:'',
  detalle: '',
  docu: null,
  lugar_caso: '',
  fecha_caso: '',
  Obv_Ads: '',
  NombreResponsable: '',
  cargo: ''
}

  clickNoEsHoy() {
    this.isDateToday=false;
  }

  clickEsHoy() {
    this.isDateToday = true;
    this.formData.fecha_hora_recepcion = new Date;
  }

ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  
}

onFileSelected(event: any) {
  if (event.target.files && event.files.length > 0) {
     this.file = event.target.files[0]
    const fileData = new FormData();
    fileData.append('file',this.file)
    
}
}

errorMessage(){
if(!this.formData.numeroCaso){
      this.eMNumeroCaso.set('Favor de indicar el numero de caso');
      this.isNumeroCaso = false
    }else{
      this.eMNumeroCaso.set('');
    }

    if(!this.formData.Unidad_Ejecutora) {
      this.eMUnidad_Ejecutora.set('Favor de indicar la unidad ejecutora');
      this.isUnidad_Ejecutora = false;
    }else{
      this.eMUnidad_Ejecutora.set('');
    }

    if (!this.formData.medios_recepcion){
      this.eMmedios_recepcion.set('Favor de indicar el medio de recepción');
      this.ismedios_recepcion = false;
    }else {
      this.eMmedios_recepcion.set('');
    }

    if (!this.formData.tipo_Caso){
      this.eMtipo_Caso.set('Favor de indicar el tipo de caso');
      this.istipo_Caso = false;
    }else{
      this.eMtipo_Caso.set('');
    }

    if(!this.formData.NombreResponsable) {
      this.eMNombreResponsable.set('Favor de indicar el responsable de la atención');
      this.isNombreResponsable = false;
    }else{
      this.eMNombreResponsable.set('');
    }

    if(!this.formData.cargo) {
      this.eMcargo.set('Favor de indicar el cargo del responsable de la atención');
      this.iscargo = false;
    }else{
      this.eMcargo.set('');
    }
}

 onSubmit() {
    console.log(this.formData)

    this.errorMessage();
    
    if (this.isNumeroCaso && this.isUnidad_Ejecutora && this.ismedios_recepcion && this.istipo_Caso && this.isNombreResponsable && this.iscargo) {
      
    }
    
  }



}



  

