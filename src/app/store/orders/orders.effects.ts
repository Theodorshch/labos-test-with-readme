import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, switchMap } from "rxjs/operators";

import { OrdersService } from "./orders.service";
import { getOrders, getOrdersSuccess } from "./orders.actions";

@Injectable()
export class OrdersEffects {
  getOrders = createEffect(
    () =>
      this.actions$.pipe(
        ofType(getOrders.type),
        switchMap(() => this.ordersService.getOrders()),
        map(orders => getOrdersSuccess({orders})),
      ),
  );

  constructor(private actions$: Actions, private ordersService: OrdersService) {
  }
}
