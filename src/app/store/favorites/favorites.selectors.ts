import { createFeatureSelector, createSelector } from "@ngrx/store";
import { favoritesAdapter, FavoritesState } from "./favorites.model";
import { selectPatientsEntities } from "../patients/patients.selectors";
import { selectOrdersEntities } from "../orders/orders.selectors";

export const selectFavoritesState = createFeatureSelector<FavoritesState>("favorites");

const favoritesAdapterSelectors = favoritesAdapter.getSelectors();

export const selectAllFavorites = createSelector(selectFavoritesState, favoritesAdapterSelectors.selectAll);
export const selectFavoritesPatients = createSelector(
  selectAllFavorites,
  selectPatientsEntities,
  (favorites, patients) =>
    favorites.filter(item => Boolean(item.patientId)).map(item => patients[item.patientId]),
);

export const isPatientFavorite = createSelector(
  selectFavoritesPatients,
  (patients, props) => patients.some(patient => patient.defaultId === props.patientId),
);

export const selectFavoritesOrders = createSelector(
  selectAllFavorites,
  selectOrdersEntities,
  (favorites, orders) =>
    favorites.filter(item => Boolean(item.orderId)).map(item => orders[item.orderId]),
);

export const isOrderFavorite = createSelector(
  selectFavoritesOrders,
  (orders, props) => orders.some(order => order.identifier === props.orderId),
);
