import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormularioRoutingModule } from './formulario-routing.module';
import { FormularioComponent } from './formulario.component';
import { InicioComponent } from './inicio/inicio.component';
import { ServicioComponent } from './servicio/servicio.component';
import { StaticComponent } from './static/static.component';


@NgModule({
  declarations: [
    FormularioComponent,
    InicioComponent,
    ServicioComponent,
    StaticComponent
  ],
  imports: [
    CommonModule,
    FormularioRoutingModule
  ]
})
export class FormularioModule { }
