import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavegationService } from 'src/app/services/navegation.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
})
export class InicioComponent implements OnInit {
  @ViewChild('inicio2', { static: true }) inicio: ElementRef;
  @ViewChild('inicio1', { static: true }) inicio1: ElementRef;
  constructor(private readonly _navigationPages: NavegationService) {}

  ngOnInit(): void {
    this.changeEstadoNav();
  }
  elemetoHtmlSeleccionado(elem: ElementRef) {
    const elementoNat = elem.nativeElement;
    elementoNat.scrollIntoView({ behavior: 'smooth' });
  }

  changeEstadoNav(): void {
    this._navigationPages.paginaSection$
      // .pipe(takeUntil(this.stop$))
      .subscribe((pagina: string) => {
        switch (pagina) {
          case 'inicio1':
            this.elemetoHtmlSeleccionado(this.inicio1);
            break;
          case 'inicio2':
            this.elemetoHtmlSeleccionado(this.inicio);
            break;

          default:
            break;
        }
      });
  }
}
