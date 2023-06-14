import { createAction, props } from "@ngrx/store";
import { Order } from "../../shared/models/order.model";

export const getOrders = createAction("[Orders] Get Orders");
export const getOrdersSuccess = createAction(`${getOrders.type} Success`, props<{ orders: Order[] }>());
