import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { Anexo1Component } from './anexos/anexo1/anexo1';
import { Anexo2Component } from './anexos/anexo2/anexo2';
import { Anexo3Component } from './anexos/anexo3/anexo3';
import { Anexo4Component } from './anexos/anexo4/anexo4';
import { Anexo5Component } from './anexos/anexo5/anexo5';
import { Anexo7Component } from './anexos/anexo7/anexo7';
import { SignIn } from './sign-in/sign-in';
import { Status } from './status/status';


export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Pantalla principal'
        
    },

    {
        path: 'anexo1',
        component: Anexo1Component,
        title: 'Formulario de Registro y Seguimiento de quejas, reclamos, solicitudes o sugerencias (QRSS)'
    },

    {
        path: 'anexo2',
        component: Anexo2Component,
        title: 'Formulario para el buzón de los casos para el MQR'
    },

    {
        path: 'anexo3',
        component: Anexo3Component,
        title: 'Formulario de Respuesta'
    },

    {
        path: 'anexo4',
        component: Anexo4Component,
        title: 'Formulario de comunicación de Resolución y Cierre del Caso'
    },
    
    {
        path: 'anexo5',
        component: Anexo5Component,
        title: 'Formulario de registro de incidentes de explotación y abuso sexuales, y acoso sexual (EyAS/ASx)'
    },

    {
        path: 'anexo7',
        component: Anexo7Component,
        title: 'Encuesta de satisfacción al MQR'
    },

    {
        path: 'acceder',
        component: SignIn,
        title: 'Acceder'
    },

    {
        path: 'status',
        component: Status,
        title: 'Estado'
    }
    

];
