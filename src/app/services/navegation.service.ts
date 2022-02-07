import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SidebarStatus } from '../models';

@Injectable({
  providedIn: 'root',
})
export class NavegationService {
  private _pagina = new BehaviorSubject<SidebarStatus>({
    id: '1',
    open: true,
    status: 'active',
  });
  public pagina$ = this._pagina.asObservable();

  private _paginaSection = new BehaviorSubject<string>('inicio');
  public paginaSection$ = this._paginaSection.asObservable();

  constructor() {}

  navegationPages(sidebarStatus: SidebarStatus): void {
    this._pagina.next(sidebarStatus);
  }
  navegationPagesSection(pagina: string): void {
    this._paginaSection.next(pagina);
  }
}
