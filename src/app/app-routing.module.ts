import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioRoutingModule } from './formulario/formulario-routing.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'formulario',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormularioRoutingModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
