import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { AnexoServices } from '../anexos.service';
import { anexoModel } from '../anexos.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-card-anexos',
  imports: [RouterModule],
  templateUrl: './card-anexos.html',
  styleUrl: './card-anexos.css',
})
export class CardAnexos {
@Input({required: true}) anexos!: anexoModel;


  

 


}
