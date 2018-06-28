import { Component } from '@angular/core';
import { MenuService, Menu } from './services/menu.service';

@Component({
  // el selector es la etiqueta para usar el componente
  selector: 'app-root',
  // el tamplateUrl es la ruta del archivo de template
  templateUrl: './app.component.html',
  // las styleUrls son las rutas de los archivos de estilos
  styleUrls: ['./app.component.css'],
  // los providers son los servicios disponibles a partir de este nivel
  providers: [],
  // el template es el template del componente
  // Ejemplo de template template: '<p> Hola </p>'
})
export class AppComponent {
  title = 'app';
  data: Menu[] = [];

  constructor(service: MenuService) {
    service.loadMenu()
    .subscribe(x => this.data = x);
  }
}
