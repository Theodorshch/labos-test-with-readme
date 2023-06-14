import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { favoritesReducer } from "./favorites.reducers";
import { FavoritesEffects } from "./favorites.effects";

@NgModule({
  imports: [
    StoreModule.forFeature("favorites", favoritesReducer),
    EffectsModule.forFeature([FavoritesEffects]),
  ],
})
export class FavoritesStoreModule {
}
