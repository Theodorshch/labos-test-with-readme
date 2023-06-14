import { ChangeDetectionStrategy, Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { selectAllFavorites } from "../../../store/favorites/favorites.selectors";
import { removeFromFavorites } from "../../../store/favorites/favorites.actions";

@Component({
  selector: "st-favorites",
  templateUrl: "./favorites.component.html",
  styleUrls: ["./favorites.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FavoritesComponent {
  favorites$ = this.store.select(selectAllFavorites);

  constructor(private store: Store) {
  }

  listenAddToFavoriteClick(event: Event) {
    const target = event.target as HTMLElement;
    if (target.tagName !== "BUTTON") {
      return;
    }

    const {itemId} = target.dataset;
    this.removeFromFavorite(itemId);
  }

  private removeFromFavorite(itemId: string) {
    this.store.dispatch(removeFromFavorites({itemId}));
  }

}
