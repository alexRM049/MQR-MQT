import { Component, inject, Input, signal } from '@angular/core';
import { Header } from '../header/header';
import { RouterModule } from '@angular/router';
import { CardAnexos } from '../anexos/card-anexos/card-anexos';
import { anexoModel } from '../anexos/anexos.model';
import { AnexoServices } from '../anexos/anexos.service';
import { Footer } from '../footer/footer';
import {A11yModule} from '@angular/cdk/a11y';

@Component({
  selector: 'app-home',
  imports: [Header, 
            RouterModule, 
            CardAnexos, 
            Footer,
            A11yModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent {

    steps = signal([
    { num: 1, text: 'Identifica cuál es el tipo de reporte que necesitas realizar.' },
    { num: 2, text: 'Completa el formulario con la opción identificada.' },
    { num: 3, text: 'Envía el formulario y nuestro equipo especializado gestionará tu caso.' }
  ]);


private anexoserv = inject(AnexoServices)

listaAnexos = this.anexoserv.anexosTitles;

get listaAnexosget() {
  return this.listaAnexos;
}

}
