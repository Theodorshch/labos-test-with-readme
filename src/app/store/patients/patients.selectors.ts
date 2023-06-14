import { createFeatureSelector, createSelector } from "@ngrx/store";
import { patientsAdapter, PatientsState } from "./patients.model";

export const selectPatientsState = createFeatureSelector<PatientsState>("patients");

const adaptorSelectors = patientsAdapter.getSelectors();
export const selectAllPatients = createSelector(selectPatientsState, adaptorSelectors.selectAll);
export const selectPatientsEntities = createSelector(selectPatientsState, adaptorSelectors.selectEntities);

export const selectPatientById = createSelector(
  selectAllPatients,
  (patients, props) => patients.filter((patient) => patient.id === props.id),
);
