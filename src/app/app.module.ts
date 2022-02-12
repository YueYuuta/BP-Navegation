import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioModule } from './formulario/formulario.module';

import { TemplateModule } from './template/template.module';
// import { InsideViewportDirective } from './directives/inside-viewport.directive';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, TemplateModule, FormularioModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
