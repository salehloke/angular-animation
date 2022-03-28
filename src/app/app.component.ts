import { Component, VERSION, ViewChild } from '@angular/core';
import { ChildrenOutletContexts, RouterOutlet } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private contexts: ChildrenOutletContexts) {}

  name = 'Angular ' + VERSION.major;

  getRouteAnimationData() {
    /**
     * 1. takes value of outlet
     * 2. returns string (represent state)
     * 3. based on the custom data of the 
     * current active route 
     */ 
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.[
      'animation'
    ];
  }
}
