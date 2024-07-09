import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { routes } from '../../../assets/routes';

@Component({
  selector: 'app-welcomepage',
  templateUrl: './welcomepage.component.html',
  styleUrl: './welcomepage.component.css'
})
export class WelcomepageComponent {

  routeList: Routes = routes;
  
  protected returnRouteTranslated(path: any): string {
    return this.translate.instant(path);
  }

  constructor(private translate: TranslateService) {}

}
