import { Action } from '@ngrx/store';

import { Pizza } from '../../models/pizza.model';

export const MY_ACTION = '[Feature] My Action';
export const LOAD_PIZZAS = '[Pizza] Load Pizzas';
export const LOAD_PIZZAS_FAIL = '[Pizza] Load Pizzas Fail';
export const LOAD_PIZZAS_SUCCESS = '[Pizza] Load Pizzas Success';

export class MyAction implements Action {
  readonly type = MY_ACTION;
  constructor(public payload: any) {}
}

export class LoadPizzas implements Action {
  readonly type = LOAD_PIZZAS;
  constructor() {}
}

export class LoadPizzasFail implements Action {
  readonly type = MY_ACTION;
  constructor(public payload: any) {}
}
export class LoadPizzasSuccess implements Action {
  readonly type = MY_ACTION;
  constructor(public payload: Pizza[]) {}
}

// action types
export type PizzasAction = MyAction | LoadPizzas | LoadPizzasFail | LoadPizzasSuccess;
