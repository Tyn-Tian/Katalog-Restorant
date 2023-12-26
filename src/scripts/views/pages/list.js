import TheRestaurantSource from '../../data/restaurant-source';
import { createResItemTemplate } from '../templates/template-creator';

const AllList = {
  async render() {
    return `
            <h2>All List Restorant</h2>
            <div class="resto-cards"></div>
        `;
  },

  async afterRender() {
    const restaurants = await TheRestaurantSource.allListRestaurants();
    const restaurantsContainer = document.querySelector('.resto-cards');
    restaurants.forEach((res) => {
      restaurantsContainer.innerHTML += createResItemTemplate(res);
    });
  },
};

export default AllList;
