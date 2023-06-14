import { createEntityAdapter, EntityState } from "@ngrx/entity";

export interface FavoriteItem {
  patientId?: string;
  orderId?: string;
}

export interface FavoritesState extends EntityState<FavoriteItem> {
}

export const favoritesAdapter = createEntityAdapter<FavoriteItem>({selectId: (favorite: FavoriteItem) => favorite.patientId || favorite.orderId});
