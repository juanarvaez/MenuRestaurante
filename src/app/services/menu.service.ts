import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }

  loadMenu(): Observable<Menu[]> {
    return timer(500)
    .pipe(
      map(() => {
        return [
          {chef: 'Dario', date: new Date(), img: 'https://goo.gl/y4zo2x'},
          {chef: 'Juan', date: new Date(), img: 'https://goo.gl/cwtKtg'},
          {chef: 'Pedro', date: new Date(), img: 'https://goo.gl/y4zo2x'},
          {chef: 'Maria', date: new Date(), img: 'https://goo.gl/y4zo2x'},
          {chef: 'Jose', date: new Date(), img: 'https://goo.gl/y4zo2x'},
          {chef: 'Marta', date: new Date(), img: 'https://goo.gl/y4zo2x'}
        ];
      })
    );
  }
}

export class Menu {
  constructor(
    public img: string,
    public chef: string,
    public date: Date) {}
}
