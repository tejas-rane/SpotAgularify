import { Component } from '@angular/core';
import {NavbarComponent} from './components/navbar/navbar.component'
@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateURL: `app.component.html`,
  directives :[NavbarComponent]
})
export class AppComponent  { name = 'Angular'; }
