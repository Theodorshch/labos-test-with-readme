import { createFeatureSelector, createSelector } from "@ngrx/store";
import { FavoriteItem, favoritesAdapter, FavoritesState } from "./favorites.model";
import { selectPatientsEntities } from "../patients/patients.selectors";
import { selectOrdersEntities } from "../orders/orders.selectors";
import { Patient } from "../../shared/models/patient.model";
import { Order } from "../../shared/models/order.model";

export const selectFavoritesState = createFeatureSelector<FavoritesState>("favorites");

const favoritesAdapterSelectors = favoritesAdapter.getSelectors();

export const selectAllFavorites = createSelector(selectFavoritesState, favoritesAdapterSelectors.selectAll);

export const selectAllFavoritesExpanded = createSelector(
  selectAllFavorites,
  selectPatientsEntities,
  selectOrdersEntities,
  (favorites, patients, orders) => {
    return favorites.map(item => {
      if (item.patientId) {
        return {...item, patient: patients[item.patientId]};
      }

      if (item.orderId) {
        return {...item, order: orders[item.orderId]};
      }

      return item;
    });
  }
);

export const selectAllFavoritesExpandedFiltered = createSelector(
  selectAllFavoritesExpanded,
  (favorites: (FavoriteItem & { order?: Order, patient?: Patient })[], props: { filter: string }) => {
    return favorites.filter(item => {
      if (!props.filter) {
        return true;
      }

      if (item.patientId) {
        return item.patient.firstName.toLowerCase().includes(props.filter.toLowerCase());
      }

      if (item.orderId) {
        return item.order.orderName.toLowerCase().includes(props.filter.toLowerCase());
      }

      return false;
    });
  }
);

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
