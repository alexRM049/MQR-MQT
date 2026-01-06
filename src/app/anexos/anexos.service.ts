import { Injectable } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Injectable({providedIn: 'root'})
export class AnexoServices {

    anexosTitles = [

        {
            anexo: 1,
            title: "Formulario de Registro y Seguimiento de quejas, reclamos, solicitudes o sugerencias (QRSS)",
            path:'anexo1'
        },

        /*{
            anexo: 2,
            title: "Formulario para el buzón de los casos para el MQR",
            path: 'anexo2'
        },

        {
            anexo: 3,
            title: "Formulario de Respuesta",
            path: 'anexo3'

        },*/

        {
            anexo: 4,
            title: "Formulario de comunicación de Resolución y Cierre del Caso",
            path: 'anexo4'

        },

        {
            anexo: 5,
            title: "Formulario de registro de incidentes de explotación y abuso sexuales, y acoso sexual (EyAS/ASx)",
            path: 'anexo5'
        },

        {
            anexo: 7,
            title: "Encuesta de satisfacción al MQR",
            path: 'anexo7'
        }

    ]
}