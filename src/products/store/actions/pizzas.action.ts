import { Action } from '@ngrx/store';
import { Pizza } from '../../models/pizza.model';

export const LOAD_PIZZAS = '[🍕] Load Pizzas';
export const LOAD_PIZZAS_FAIL = '[🍕] Load Pizzas Fail';
export const LOAD_PIZZAS_SUCCESS = '[🍕] Load Pizzas Success';
export const SELECT_PIZZA = '[🍕] Select Pizza';

export class LoadPizzas implements Action {
  readonly type = LOAD_PIZZAS;
  constructor() { }
}

export class LoadPizzasFail implements Action {
  readonly type = LOAD_PIZZAS_FAIL;
  constructor(public payload: any) { }
}
export class LoadPizzasSuccess implements Action {
  readonly type = LOAD_PIZZAS_SUCCESS;
  constructor(public payload: Pizza[]) { }
}

export class SelectPizza implements Action {
  readonly type = SELECT_PIZZA;
  constructor(public payload: any) { }
}

// action types
export type PizzasAction = LoadPizzas | LoadPizzasFail | LoadPizzasSuccess | SelectPizza;
