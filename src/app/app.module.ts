import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { CardComponent } from './components/card/card.component';
import { FechaPipe } from './pipes/fecha.pipe';

@NgModule({
  // las declaraciones son componetntes, pipes o directivas que son visbles en el modulo
  declarations: [
    AppComponent, ToolbarComponent, CardComponent, FechaPipe
  ],
  // los imports sirven para importar modulos
  imports: [
    BrowserModule
  ],
  // providers son servicios (singleton) disponibles en el modulo
  providers: [],
  // el botstrap es el primer componente en ejecutarse
  bootstrap: [AppComponent],
// los exports especifica que componentes, pipes, directivas o servicios se exportan
  exports: []
})
export class AppModule { }
