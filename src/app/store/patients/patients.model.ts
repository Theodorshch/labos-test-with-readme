import { Patient } from "../../shared/models/patient.model";
import { createEntityAdapter, EntityState } from "@ngrx/entity";

export interface PatientsState extends EntityState<Patient> {
}

export const patientsAdapter = createEntityAdapter<Patient>({selectId: (patient: Patient) => patient.defaultId});
