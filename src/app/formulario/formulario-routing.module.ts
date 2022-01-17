import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './formulario.component';
import { InicioComponent } from './inicio/inicio.component';
import { ServicioComponent } from './servicio/servicio.component';
import { StaticComponent } from './static/static.component';

const routes: Routes = [
  {
    path: 'formulario',
    component: FormularioComponent,
    children: [
      {
        path: 'inicio',
        component: InicioComponent,
        data: { titulo: 'inicio' },
      },

      {
        path: 'servicios',
        component: ServicioComponent,
        data: { titulo: 'servicio' },
      },
      {
        path: 'static',
        component: StaticComponent,
        data: { titulo: 'static' },
      },
      {
        path: '',
        redirectTo: 'inicio',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormularioRoutingModule {}
