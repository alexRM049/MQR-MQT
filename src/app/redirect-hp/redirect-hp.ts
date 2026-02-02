import { Component, inject } from '@angular/core';
import { RouterModule, Router} from '@angular/router';

@Component({
  selector: 'app-redirect-hp',
  imports: [RouterModule],
  templateUrl: './redirect-hp.html',
  styleUrl: '../anexos/anexos.css',
})
export class RedirectHP {


private route = inject(Router)


goToHome() {
  this.route.navigate(['/'])
}
}
