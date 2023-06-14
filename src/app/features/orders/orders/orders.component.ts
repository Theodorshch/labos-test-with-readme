import { ChangeDetectionStrategy, Component } from "@angular/core";

import { ROUTE_ANIMATIONS_ELEMENTS } from "../../../core/core.module";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { selectAllOrders } from "../../../store/orders/orders.selectors";
import { Order } from "../../../shared/models/order.model";
import { getOrders } from "../../../store/orders/orders.actions";

@Component({
  selector: "st-orders",
  templateUrl: "./orders.component.html",
  styleUrls: ["./orders.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrdersComponent {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  orders$: Observable<Order[]> = this.store.select(selectAllOrders);

  constructor(private store: Store) {
  }

  getOrders() {
    this.store.dispatch(getOrders());
  }
}
