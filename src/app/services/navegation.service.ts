import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HomePagestatus } from '../mock/home-page-status.mock';
import { SubPagestatus } from '../mock/sub-page-status.mock';
import { SidebarStatus } from '../models';
import { GeneralData } from '../utils/enum/sections/genetal-data.enum';

@Injectable({
  providedIn: 'root',
})
export class NavegationService {
  init: SidebarStatus = {
    id: '1',
    open: true,
    status: 'active',
  };
  private _pagina = new BehaviorSubject<SidebarStatus>(this.init);
  public pagina$ = this._pagina.asObservable();

  private _subListMain = new BehaviorSubject<any>(SubPagestatus);
  public subListMain$ = this._subListMain.asObservable();

  private _pageListMain = new BehaviorSubject<any>(HomePagestatus);
  public pageListMain$ = this._pageListMain.asObservable();

  private _paginaSection = new BehaviorSubject<string>(GeneralData.basicData);
  public paginaSection$ = this._paginaSection.asObservable();

  constructor() {}

  navegationPages(sidebarStatus: SidebarStatus): void {
    this._pagina.next(sidebarStatus);
  }
  navegationPagesSection(pagina: string): void {
    this._paginaSection.next(pagina);
  }
  pageListMain(list: any): void {
    this._pageListMain.next(list);
  }

  subListMain(list: any): void {
    this._subListMain.next(list);
  }
}
