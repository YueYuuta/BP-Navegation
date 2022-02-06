import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavegationService {
  private _pagina = new BehaviorSubject<string>('1');
  public pagina$ = this._pagina.asObservable();

  private _paginaSection = new BehaviorSubject<string>('inicio');
  public paginaSection$ = this._pagina.asObservable();

  constructor() {}

  navegationPages(pagina: string): void {
    this._pagina.next(pagina);
  }
  navegationPagesSection(pagina: string): void {
    this._paginaSection.next(pagina);
  }
}
