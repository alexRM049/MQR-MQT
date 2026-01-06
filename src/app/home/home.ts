import { Component, inject, Input } from '@angular/core';
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


private anexoserv = inject(AnexoServices)

listaAnexos = this.anexoserv.anexosTitles;

get listaAnexosget() {
  return this.listaAnexos;
}

}
