
import { Component, WritableSignal, signal } from '@angular/core';
import { FormGroup, FormsModule } from '@angular/forms';
import { ChangeDetectionStrategy } from '@angular/core';
import { RedirectHP } from '../../redirect-hp/redirect-hp';
import { Footer } from '../../footer/footer';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core'; // Use this for standard JavaScript Date object
import { MatStepperModule } from '@angular/material/stepper';
import { AnimationCallbackEvent } from '@angular/core';

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
  file = '';

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

  selectedOption: WritableSignal<string | null> = signal(null);

formData: any ={
  numeroCaso:'',
  Unidad_Ejecutora: '',
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
  docu: File,
  lugar_caso: '',
  fecha_caso: '',
  Obv_Ads: '',
  NombreResponsable: '',
  cargo: ''
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
 onSubmit() {
    console.log(this.formData)
  }
}
  

