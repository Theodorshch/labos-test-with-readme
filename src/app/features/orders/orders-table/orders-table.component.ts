import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { Order } from "../../../shared/models/order.model";
import { Store } from "@ngrx/store";
import { isOrderFavorite } from "../../../store/favorites/favorites.selectors";
import { addOrderToFavorites, removeFromFavorites } from "../../../store/favorites/favorites.actions";

@Component({
  selector: "st-orders-table",
  templateUrl: "./orders-table.component.html",
  styleUrls: ["./orders-table.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrdersTableComponent {
  @Input() orders: Order[];

  constructor(private store: Store) {
  }

  isFavorite(orderId: string) {
    return this.store.select(isOrderFavorite, {orderId});
  }

  listenAddToFavoriteClick(event: Event) {
    const target = event.target as HTMLElement;
    if (target.tagName !== "BUTTON") {
      return;
    }

    const {itemId, isFavorite} = target.dataset;

    if (isFavorite === "true") {
      this.removeFromFavorite(itemId);
      return;
    }

    this.addToFavorite(itemId);
  }

  private addToFavorite(itemId: string) {
    this.store.dispatch(addOrderToFavorites({itemId}));
  }

  private removeFromFavorite(itemId: string) {
    this.store.dispatch(removeFromFavorites({itemId}));
  }
}
