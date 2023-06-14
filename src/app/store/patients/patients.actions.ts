import { createAction, props } from "@ngrx/store";
import { Patient } from "../../shared/models/patient.model";

export const getPatients = createAction("[Patients] Get Patients");
export const getPatientsSuccess = createAction(`${getPatients.type} Success`, props<{ patients: Patient[] }>());
