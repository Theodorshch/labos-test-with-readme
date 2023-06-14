import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

import { CoreModule } from "./core/core.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppRootComponent } from "./app-root/app-root.component";
import { PatientsStoreModule } from "./store/patients/patients-store.module";
import { FavoritesStoreModule } from "./store/favorites/favorites-store.module";
import { OrdersStoreModule } from "./store/orders/orders-store.module";

@NgModule({
  imports: [
    // angular
    BrowserAnimationsModule,
    BrowserModule,
    StoreModule,
    EffectsModule,
    StoreDevtoolsModule,
    PatientsStoreModule,
    OrdersStoreModule,
    FavoritesStoreModule,

    // core
    CoreModule,

    // app
    AppRoutingModule,
  ],
  declarations: [AppRootComponent],
  bootstrap: [AppRootComponent],
})
export class MainModule {
}
