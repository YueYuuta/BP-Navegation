import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavegationService } from 'src/app/services/navegation.service';

@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.scss'],
})
export class ServicioComponent implements OnInit {
  @ViewChild('servicio1', { static: true }) servicio1!: ElementRef;
  @ViewChild('servicio2', { static: true }) servicio2!: ElementRef;
  @ViewChild('servicio3', { static: true }) servicio3!: ElementRef;
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
          case 'servicio1':
            this.elemetoHtmlSeleccionado(this.servicio1);
            break;
          case 'servicio2':
            this.elemetoHtmlSeleccionado(this.servicio2);
            break;
          case 'servicio3':
            this.elemetoHtmlSeleccionado(this.servicio3);
            break;

          default:
            break;
        }
      });
  }
}
