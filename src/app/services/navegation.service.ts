import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavegationService {
  private _pagina = new BehaviorSubject<string>('inicio');
  public pagina$ = this._pagina.asObservable();

  constructor() {}

  navegationPages(pagina: string): void {
    this._pagina.next(pagina);
  }
}