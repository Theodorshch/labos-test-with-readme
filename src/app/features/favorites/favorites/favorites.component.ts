import { ChangeDetectionStrategy, Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { selectAllFavoritesExpandedFiltered } from "../../../store/favorites/favorites.selectors";
import { removeFromFavorites } from "../../../store/favorites/favorites.actions";
import { FormControl } from "@angular/forms";
import { startWith, switchMap } from "rxjs/operators";

@Component({
  selector: "st-favorites",
  templateUrl: "./favorites.component.html",
  styleUrls: ["./favorites.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FavoritesComponent {
  filterControl = new FormControl("");
  favorites$ = this.filterControl.valueChanges.pipe(
    startWith(""),
    switchMap(filter => this.store.select(selectAllFavoritesExpandedFiltered, {filter}))
  );

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
