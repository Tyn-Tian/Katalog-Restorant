import API_ENDPOINT from '../globals/api-endpoint';

class TheRestaurantSource {
  static async allListRestaurants() {
    const response = await fetch(API_ENDPOINT.ALL_LIST);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }
}

export default TheRestaurantSource;
