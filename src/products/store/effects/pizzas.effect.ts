import { Effect, Actions } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { of } from 'rxjs/observable/of';
import { map, catchError, exhaustMap } from 'rxjs/operators';

import * as pizzaActions from '../actions/pizzas.action';
import * as fromServices from '../../services';

@Injectable()
export class PizzasEffects {

  constructor(
    private router: Router,
    private pizzaService: fromServices.PizzasService,
    private actions$: Actions,
  ) { }
  @Effect()
  loadPizzas$ = this.actions$
    .ofType(pizzaActions.LOAD_PIZZAS)
    .pipe(exhaustMap(() => {
      return this.pizzaService.getPizzas()
        .pipe(
          map(pizzas => new pizzaActions.LoadPizzasSuccess(pizzas)),
          catchError(error => of(new pizzaActions.LoadPizzasFail(error)))
        )
    }))
}
