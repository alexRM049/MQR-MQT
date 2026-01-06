import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RedirectHP } from '../../redirect-hp/redirect-hp';
import { Footer } from '../../footer/footer';

@Component({
  selector: 'app-anexo7',
  imports: [FormsModule, RedirectHP, Footer],
  templateUrl: './anexo7.html',
  styleUrl: '../anexos.css',
})
export class Anexo7Component {
  formsData: any = {
  numeroCaso:'',
  satisfecho:'',
  nivelSatisfecho: '',
  respetuosa: '',
  clara: '',
  oportuna: '',
  recomendacion: '',
  }

 onSubmit () {
  console.log(this.formsData)
 }

}
