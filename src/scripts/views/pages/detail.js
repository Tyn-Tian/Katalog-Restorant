/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import FavoriteMovieIdb from '../../data/favorite-movie-idb';
import TheRestaurantSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import likeButtonPresenter from '../../utils/like-button-presenter';
import reviewButtonInitiator from '../../utils/review-button-initiator';
import { createResDetailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
            <div class="detail-cards"></div>
            <div class="reviewContainer"></div>
            <div id="likeButtonContainer"></div>
        `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const res = await TheRestaurantSource.detailRestaurant(url.id);
    console.log(res);
    const restaurantContainer = document.querySelector('.detail-cards');
    restaurantContainer.innerHTML += createResDetailTemplate(res);

    reviewButtonInitiator.init({
      reviewContainer: document.querySelector('.reviewContainer'),
      id: res.id,
    });

    likeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurants: FavoriteMovieIdb,
      res: {
        id: res.id,
        name: res.name,
        description: res.description,
        city: res.city,
        address: res.address,
        pictureId: res.pictureId,
        menus: res.menus,
        rating: res.rating,
        customerReviews: res.customerReviews,
      },
    });
  },
};

export default Detail;
