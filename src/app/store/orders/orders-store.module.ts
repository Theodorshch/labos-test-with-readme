import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { OrdersEffects } from "./orders.effects";
import { ordersReducer } from "./orders.reducers";

@NgModule({
  imports: [
    StoreModule.forFeature("orders", ordersReducer),
    EffectsModule.forFeature([OrdersEffects]),
  ],
})
export class OrdersStoreModule {
}
