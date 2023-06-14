import { ChangeDetectionStrategy, Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

import { ROUTE_ANIMATIONS_ELEMENTS } from "../../../core/core.module";
import { Patient } from "../../../shared/models/patient.model";
import { getPatients } from "../../../store/patients/patients.actions";
import { selectAllPatients } from "../../../store/patients/patients.selectors";

@Component({
  selector: "st-patients",
  templateUrl: "./patients.component.html",
  styleUrls: ["./patients.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PatientsComponent {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  patients$: Observable<Patient[]> = this.store.select(selectAllPatients);

  constructor(private store: Store) {
  }

  getPatients() {
    this.store.dispatch(getPatients());
  }
}
