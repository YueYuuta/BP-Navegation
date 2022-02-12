import {
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  Inject,
  Input,
  OnInit,
} from '@angular/core';
import { Observable } from 'rxjs';
import { MenuModel } from 'src/app/models';
import { NavegationService } from '../../services/navegation.service';
import { SidebarStatus } from '../../models';
import { HomePageName } from 'src/app/utils/enum/page-main/home-page-name.enum';
// import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit, AfterViewInit {
  subSelct: string = 'Datos básicos';
  docan;
  subPagestatus: any;
  pagesName = HomePageName;
  globalStatus: boolean = false;
  @Input() Menus!: MenuModel[];
  itemNumber!: number;
  lastIdSumMenu: SidebarStatus = { id: '1', open: true, status: 'active' };
  selectPage$!: Observable<SidebarStatus>;

  constructor(
    private readonly _navegationPageService: NavegationService // @Inject(DOCUMENT) document
  ) {
    this.docan = document;
  }
  ngAfterViewInit(): void {
    this.submenuChange(this.lastIdSumMenu.id);
  }

  ngOnInit(): void {
    this.formChangeStatus();
    this.itemNumber = this.Menus.length;
    this.initialPage();
    this._navegationPageService.pageListMain$.subscribe((data) => {
      console.log('esta es la data de la pagina', data);
      this.globalStatus = data;
    });
  }

  private formChangeStatus() {
    this._navegationPageService.subListMain$.subscribe((data) => {
      console.log('datos del form', data);
      this.subPagestatus = data;
    });
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
    const elementMenu = this.docan.getElementById(idString);
    // elementMenu.parentElement.classList.toggle('arrow');
    let height = 0;
    if (elementMenu!.clientHeight === 0) {
      height = elementMenu!.scrollHeight;
    }
    const elementMenuConver = elementMenu as HTMLElement;
    elementMenuConver.style.height = `${height}px`;
  }

  changeStatusNav(pagina: string, name: string): void {
    this.subSelct = name;
    this._navegationPageService.navegationPagesSection(pagina);
  }
}
