import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ordersAdapter, OrdersState } from "./orders.model";

export const selectOrdersState = createFeatureSelector<OrdersState>("orders");

const adaptorSelectors = ordersAdapter.getSelectors();
export const selectAllOrders = createSelector(selectOrdersState, adaptorSelectors.selectAll);
export const selectOrdersEntities = createSelector(selectOrdersState, adaptorSelectors.selectEntities);

export const selectOrderById = createSelector(
  selectAllOrders,
  (orders, props) => orders.filter((order) => order.identifier === props.id),
);
