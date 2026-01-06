import { Component, inject } from '@angular/core';
import { RouterModule, Router} from '@angular/router';

@Component({
  selector: 'app-redirect-hp',
  imports: [RouterModule],
  templateUrl: './redirect-hp.html',
  styleUrl: './redirect-hp.css',
})
export class RedirectHP {


private route = inject(Router)


goToHome() {
  this.route.navigate(['/'])
}
}
