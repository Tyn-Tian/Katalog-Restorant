/* eslint-disable no-return-assign */
/* eslint-disable no-undef */
/* eslint-disable no-prototype-builtins */
/* eslint-disable consistent-return */
/* eslint-disable no-useless-return */
/* eslint-disable prefer-const */
import { itActsAsFavoriteMovieModel } from './contract/favoriteRestaurantContract';

let favoriteRestaurants = [];

const FavoriteRestaurantArray = {
  getRestaurant(id) {
    if (!id) {
      return;
    }

    return favoriteRestaurants.find((res) => res.id === id);
  },

  getAllRestaurant() {
    return favoriteRestaurants;
  },

  putRestaurant(res) {
    if (!res.hasOwnProperty('id')) {
      return;
    }

    if (this.getRestaurant(res.id)) {
      return;
    }

    favoriteRestaurants.push(res);
  },

  deleteRestaurant(id) {
    favoriteRestaurants = favoriteRestaurants.filter((res) => res.id !== id);
  },
};

describe('Favorite Restaurant Array Contract Test Implementation', () => {
  afterEach(() => favoriteRestaurants = []);

  itActsAsFavoriteMovieModel(FavoriteRestaurantArray);
});
