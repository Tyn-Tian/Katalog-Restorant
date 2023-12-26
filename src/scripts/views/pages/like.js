import FavoriteMovieIdb from '../../data/favorite-movie-idb';
import { createResItemTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return `
      <h2>Restaurant Favorite Anda</h2>
      <div class="resto-cards"></div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteMovieIdb.getAllRestaurant();
    const resContainer = document.querySelector('.resto-cards');

    restaurants.forEach((res) => {
      resContainer.innerHTML += createResItemTemplate(res);
    });
  },
};

export default Like;
