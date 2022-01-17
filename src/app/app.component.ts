import { Component } from '@angular/core';
import { data } from './mock/data-menu.mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'MenuNavegacion';
  public Menus = data;
}
