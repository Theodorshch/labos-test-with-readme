import { createReducer, on } from "@ngrx/store";
import { getPatientsSuccess } from "./patients.actions";
import { patientsAdapter } from "./patients.model";

export const patientsReducer = createReducer(
  patientsAdapter.getInitialState(),

  on(getPatientsSuccess, (state, {patients}) => patientsAdapter.addMany(patients, state)),
);
