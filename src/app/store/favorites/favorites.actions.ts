import { createAction, props } from "@ngrx/store";

export const addPatientToFavorites = createAction(
  "[Favorites] Add Patient To Favorites",
  props<{ itemId: string }>(),
);

export const addOrderToFavorites = createAction(
  "[Favorites] Add Order To Favorites",
  props<{ itemId: string }>(),
);

export const removeFromFavorites = createAction(
  "[Favorites] Remove From Favorites",
  props<{ itemId: string }>(),
);
