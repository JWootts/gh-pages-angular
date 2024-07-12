import { Component } from '@angular/core';
import { routes } from '../../../assets/routes';
import { NavigationStart, Router, Routes } from '@angular/router';

import '@cds/core/icon/register.js';
import { ClarityIcons, cogIcon, userIcon } from '@cds/core/icon';
import { TranslateService } from '@ngx-translate/core';
import { filter } from 'rxjs';

ClarityIcons.addIcons(userIcon, cogIcon);

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  isWelcome: boolean = false;
  routeList: Routes = routes;
  settingsOpened: boolean = false;

  protected returnRouteTranslated(path: any): string {
    return this.translate.instant(path);
  }

  constructor(private translate: TranslateService, private router: Router) {
    router.events.pipe(
      filter((event): event is NavigationStart => event instanceof NavigationStart),
    ).subscribe((ev) => {
      if(ev.url !== '/welcome' && ev.url !== '/') //hide the router header if we are on welcome page
        this.isWelcome = false;
      else
        this.isWelcome = true;
    });
  }
}


