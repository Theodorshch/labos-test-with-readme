import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { Order } from "../../shared/models/order.model";

export interface OrdersState extends EntityState<Order> {
}

export const ordersAdapter = createEntityAdapter<Order>({selectId: (order: Order) => order.identifier});
