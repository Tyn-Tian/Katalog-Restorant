/* eslint-disable no-undef */
/* eslint-disable import/extensions */
import { itActsAsFavoriteMovieModel } from './contract/favoriteRestaurantContract';
import FavoriteMovieIdb from '../src/scripts/data/favorite-movie-idb';

describe('Favorite Restaurant Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteMovieIdb.getAllRestaurant()).forEach(async (res) => {
      await FavoriteMovieIdb.deleteRestaurant(res.id);
    });
  });

  itActsAsFavoriteMovieModel(FavoriteMovieIdb);
});
