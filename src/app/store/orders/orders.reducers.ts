import { createReducer, on } from "@ngrx/store";
import { ordersAdapter } from "./orders.model";
import { getOrdersSuccess } from "./orders.actions";

export const ordersReducer = createReducer(
  ordersAdapter.getInitialState(),

  on(getOrdersSuccess, (state, {orders}) => ordersAdapter.addMany(orders, state)),
);
