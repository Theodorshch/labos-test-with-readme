import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FavoritesComponent } from "./favorites/favorites.component";
import { FavoritesRoutingModule } from "./favorites-routing.module";
import { MatButtonModule } from "@angular/material/button";
import { SharedModule } from "../../shared/shared.module";
import { TranslateModule } from "@ngx-translate/core";
import { MatTableModule } from "@angular/material/table";

@NgModule({
  declarations: [FavoritesComponent],
  imports: [
    CommonModule,
    FavoritesRoutingModule,
    MatButtonModule,
    SharedModule,
    TranslateModule,
    MatTableModule,
  ],
})
export class FavoritesModule {
}
