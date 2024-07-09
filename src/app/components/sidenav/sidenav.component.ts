import { Component } from '@angular/core';
import { NavigationStart, Router, Routes } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { filter } from 'rxjs';
import { routes } from '../../../assets/routes';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {
  routeList: Routes = routes;
  navCollapsed: boolean = true;
  isWelcome: boolean = false;

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
