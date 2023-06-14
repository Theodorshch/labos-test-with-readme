import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { patientsReducer } from "./patients.reducers";
import { PatientsEffects } from "./patients.effects";

@NgModule({
  imports: [
    StoreModule.forFeature("patients", patientsReducer),
    EffectsModule.forFeature([PatientsEffects]),
  ],
})
export class PatientsStoreModule {
}
