import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SharedModule } from "../../shared/shared.module";

import { PatientsRoutingModule } from "./patients-routing.module";
import { PatientsComponent } from "./patients/patients.component";
import { MatTableModule } from "@angular/material/table";
import { PatientsTableComponent } from "./patients-table/patients-table.component";

@NgModule({
  declarations: [PatientsComponent, PatientsTableComponent],
  imports: [CommonModule, SharedModule, PatientsRoutingModule, MatTableModule],
  providers: []
})
export class PatientsModule {
}
