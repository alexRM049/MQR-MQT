import { Component, inject } from '@angular/core';
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

  findCase() {
    

  
      const caseC = this.statusService.caseExample.find((item) => item.code === this.codigoStatus)
    this.casecode = caseC;

    if (caseC === undefined){
      console.log("no se pudo encontrar el caso. por favor introduzca el numero de caso nuevamente")
      alert("No se pudo encontrar el caso. Por favor introduzca el numero de caso nuevamente")
    }

    else {
      this.isCodeEntered = true;

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
