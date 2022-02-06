import {
  AfterContentInit,
  AfterViewChecked,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { MenuModel } from 'src/app/models';
import { NavegationService } from '../../services/navegation.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit, AfterViewChecked {
  @Input() Menus: MenuModel[];
  itemNumber: number;
  lastIdSumMenu: string = '1';

  constructor(private readonly _navegationPageService: NavegationService) {}
  ngAfterViewChecked(): void {
    this.submenuChange(this.lastIdSumMenu);
  }

  ngOnInit(): void {}

  selection(id: number) {
    this.submenuChange(this.lastIdSumMenu);
    const idString = id.toString();
    this.submenuChange(idString);
    this.lastIdSumMenu = idString;
  }
  submenuChange(idString: string) {
    const elementMenu = document.getElementById(idString);
    elementMenu.parentElement.classList.toggle('arrow');
    let height = 0;
    if (elementMenu.clientHeight === 0) {
      height = elementMenu.scrollHeight;
    }
    const elementMenuConver = elementMenu as HTMLElement;
    elementMenuConver.style.height = `${height}px`;
  }

  changeStatusNav(pagina: string): void {
    this._navegationPageService.navegationPagesSection(pagina);
  }
}
