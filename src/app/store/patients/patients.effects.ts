import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";

import { map, switchMap } from "rxjs/operators";
import { PatientsService } from "./patients.service";
import { getPatients, getPatientsSuccess } from "./patients.actions";

@Injectable()
export class PatientsEffects {
  getPatients = createEffect(
    () =>
      this.actions$.pipe(
        ofType(getPatients.type),
        switchMap(() => this.patientsService.getPatients()),
        map(patients => getPatientsSuccess({patients})),
      ),
  );

  constructor(private actions$: Actions, private patientsService: PatientsService) {
  }
}
