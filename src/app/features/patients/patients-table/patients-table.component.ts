import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { Patient } from "../../../shared/models/patient.model";
import { isPatientFavorite } from "../../../store/favorites/favorites.selectors";
import { Store } from "@ngrx/store";
import { addPatientToFavorites, removeFromFavorites } from "../../../store/favorites/favorites.actions";

@Component({
  selector: "st-patients-table",
  templateUrl: "./patients-table.component.html",
  styleUrls: ["./patients-table.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PatientsTableComponent {
  @Input() patients: Patient[];

  constructor(private store: Store) {
  }

  isFavorite(patientId: string) {
    return this.store.select(isPatientFavorite, {patientId});
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
    this.store.dispatch(addPatientToFavorites({itemId}));
  }

  private removeFromFavorite(itemId: string) {
    this.store.dispatch(removeFromFavorites({itemId}));
  }
}
