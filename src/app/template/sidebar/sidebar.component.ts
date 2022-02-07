import {
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Observable } from 'rxjs';
import { MenuModel } from 'src/app/models';
import { NavegationService } from '../../services/navegation.service';
import { SidebarStatus } from '../../models';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit, AfterViewInit {
  @Input() Menus: MenuModel[];
  itemNumber: number;
  lastIdSumMenu: SidebarStatus = { id: '1', open: true, status: 'complete' };
  selectPage$: Observable<SidebarStatus>;

  constructor(private readonly _navegationPageService: NavegationService) {}
  ngAfterViewInit(): void {
    this.submenuChange(this.lastIdSumMenu.id);
  }

  ngOnInit(): void {
    this.itemNumber = this.Menus.length;
    this.initialPage();
  }

  initialPage() {
    this.selectPage$ = this._navegationPageService.pagina$;
  }

  selection(id: number) {
    const idString = id.toString();
    const idStringLast = this.lastIdSumMenu.id;
    if (idString === idStringLast) {
      this.submenuChange(idString);
      this.lastIdSumMenu.id = idString;
      this.lastIdSumMenu.open = !this.lastIdSumMenu.open;
    } else {
      if (this.lastIdSumMenu.open) {
        this.submenuChange(idStringLast);
        this.lastIdSumMenu.open = !this.lastIdSumMenu.open;
      }
      this.submenuChange(idString);
      this.lastIdSumMenu.id = idString;
      this.lastIdSumMenu.open = !this.lastIdSumMenu.open;
    }
  }
  submenuChange(idString: string) {
    const elementMenu = document.getElementById(idString);
    // elementMenu.parentElement.classList.toggle('arrow');
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
