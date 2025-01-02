import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { ContactUsRouteType } from '../../../shared/enums';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './footer.component.html',
  styles: ``
})
export class FooterComponent {
  contactType = ContactUsRouteType
  companyName = environment.companyName;
}
