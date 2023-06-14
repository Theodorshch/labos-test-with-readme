import { createReducer, on } from "@ngrx/store";
import { favoritesAdapter } from "./favorites.model";
import { addOrderToFavorites, addPatientToFavorites, removeFromFavorites, } from "./favorites.actions";

export const favoritesReducer = createReducer(
  favoritesAdapter.getInitialState(),

  on(
    addPatientToFavorites,
    (state, {itemId}) => favoritesAdapter.upsertOne({patientId: itemId}, state),
  ),

  on(
    addOrderToFavorites,
    (state, {itemId}) => favoritesAdapter.upsertOne({orderId: itemId}, state),
  ),

  on(
    removeFromFavorites,
    (state, {itemId}) => favoritesAdapter.removeOne(itemId, state),
  ),
);
