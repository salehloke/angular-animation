import { Component, VERSION, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  @ViewChild(RouterOutlet) routerOutlet;
  
  name = 'Angular ' + VERSION.major;
}
