import { Component, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Anexo1Component } from './anexos/anexo1/anexo1';
import { Anexo2Component } from './anexos/anexo2/anexo2';
import { Anexo3Component } from './anexos/anexo3/anexo3';
import { Anexo4Component } from './anexos/anexo4/anexo4';
import { Anexo5Component } from './anexos/anexo5/anexo5';
import { Anexo7Component } from './anexos/anexo7/anexo7';
import { HomeComponent } from './home/home';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [Anexo1Component, 
            Anexo2Component, 
            Anexo3Component, 
            Anexo4Component,
            Anexo5Component,
            Anexo7Component,
            HomeComponent,
            RouterOutlet,
            RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('MQR');
}
