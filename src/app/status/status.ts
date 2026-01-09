import { Component, inject, signal } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { FormsModule } from '@angular/forms';
import { StatusServices } from './status.service';
import { StatusCase } from './status.model';
import { AnimationCallbackEvent } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-status',
  imports: [Header, 
            Footer,
            FormsModule,
            DatePipe],
  templateUrl: './status.html',
  styleUrl: './status.css',
})
export class Status {

  codigoStatus="";
  isCodeEntered= false;
  casecode: any 
  caseData!: StatusCase;

  statusService = inject(StatusServices)

  errorMessage = signal<string> ('');

  isShown = signal(false);

   toggle() {
    this.isShown.update((isShown) => !isShown);
  }

  findCase() {

     // Reset states
    this.errorMessage.set('');
    this.isShown.set(false);
    this.isCodeEntered = false;

      const caseC = this.statusService.caseExample.find((item) => item.code === this.codigoStatus)
    this.casecode = caseC;

     if (!this.codigoStatus.trim()) {
      this.errorMessage.set('Por favor, ingrese un código del caso que desea buscar.');
      return;
    }

    if (caseC === undefined){
        this.isCodeEntered = false
       // Instead of alert(), we update the reactive error state
      this.errorMessage.set('No se pudo encontrar el caso. Por favor, verifique el codigo e intente nuevamente.');
      console.log('caseC is undefined')
      return;
    }

    else {
      this.isCodeEntered = true;
      this.isShown.set(true);

      this.caseData = {
      code: "",
      name: caseC!.name,
      lastName: caseC!.lastName,
      date: caseC!.date,
      description: caseC!.description,
      status: caseC!.status
    }
    return console.log(caseC?.name)

    }
    
  }



}
