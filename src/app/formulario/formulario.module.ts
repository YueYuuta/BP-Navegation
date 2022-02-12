import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormularioRoutingModule } from './formulario-routing.module';
import { FormularioComponent } from './formulario.component';
import { InicioComponent } from './inicio/inicio.component';
import { ServicioComponent } from './servicio/servicio.component';
import { StaticComponent } from './static/static.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InsideViewportDirective } from '../directives/inside-viewport.directive';

@NgModule({
  declarations: [
    FormularioComponent,
    InicioComponent,
    ServicioComponent,
    StaticComponent,
    InsideViewportDirective,
  ],
  imports: [CommonModule, FormularioRoutingModule, ReactiveFormsModule],
})
export class FormularioModule {}
