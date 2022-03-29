import { Component, VERSION, ViewChild } from '@angular/core';
import {
  ActivatedRoute,
  ChildrenOutletContexts,
  RouterOutlet,
} from '@angular/router';
import { ROUTE_ANIMATION } from './shared/constants/animation';
import { routes } from './app-routing.module';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ROUTE_ANIMATION],
})
export class AppComponent {
  @ViewChild(RouterOutlet) routerOutlet;
  links = routes;

  constructor(public route: ActivatedRoute) {
    console.log(this.links);
  }

  name = 'Angular ' + VERSION.major;

  getRouteAnimationData() {
    /**
     * 1. takes value of outlet
     * 2. returns string (represent state)
     * 3. based on the custom data of the
     * current active route
     */
    return (
      this.routerOutlet &&
      this.routerOutlet.activatedRouteData &&
      this.routerOutlet.activatedRouteData.transitionState
    );
  }
}
