import CONFIG from '../../globals/config';

const ratingBg = (rate) => {
  if (rate >= 4) {
    return '#95CD41';
  }
  return '#F6D860';
};

const menuGenerator = (menu) => {
  let list = '';
  for (let i = 0; i < menu.length; i++) {
    list += `${menu[i].name}, `;
  }

  return list.substring(0, list.length - 2);
};

const reviewGenerator = (reviews) => {
  let list = '';
  for (let i = 0; i < reviews.length; i++) {
    list += `<li>${reviews[i].name}, ${reviews[i].review} - ${reviews[i].date}</li>`;
  }

  return list;
};

const createResDetailTemplate = (res) => `
  <div class="res-detail">
    <picture>
      <source media="(max-width: 780px)" srcset="${CONFIG.BASE_IMAGE_URL}small/${res.pictureId}" alt="Gambar ${res.name}">
      <img class="lazyload" src="${CONFIG.BASE_IMAGE_URL}large/${res.pictureId}" alt="Gambar ${res.name}"/>
    </picture>
    <div class="right">
      <h3>${res.name}</h3>
      <div>
        <h4>Alamat</h4>
        <p>${res.address}, ${res.city}</p>
      </div>
      <div>
        <h4>Deskripsi</h4>
        <p>${res.description}</p>
      </div>
      <div>
        <h4>Foods</h4>
        <p>${menuGenerator(res.menus.foods)}</p>
      </div>
      <div>
        <h4>Drinks</h4>
        <p>${menuGenerator(res.menus.drinks)}</p>
      </div>
      <div class="review">
        <h4>Customer Reviews</h4>
        <ul>
          ${reviewGenerator(res.customerReviews)}
        </ul>
      </div>
    </div>
  </div>
`;

const createResItemTemplate = (res) => `
  <div class="card">
    <div>
      <picture>
        <source media="(max-width: 780px)" data-srcset="${CONFIG.BASE_IMAGE_URL}small/${res.pictureId}" alt="Gambar ${res.name}">
        <img class="lazyload" data-src="${CONFIG.BASE_IMAGE_URL}medium/${res.pictureId}" alt="Gambar ${res.name}"/>
      </picture>
      <p style="background: ${ratingBg(res.rating)};">${res.rating}</p>
      <h3 tabindex="0"><a href="/#/detail/${res.id}">${res.name}, ${res.city}</a></h3>
    </div>
  </div>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

const createReviewTemplate = () => `
  <button class="add-btn">Add New Reviews</button>
  <form>
    <div>
      <label>Nama</label>
      <input type="text" value="" class="txtName" required>
    </div>
    <div>
      <label>Review</label>
      <input type="text" value="" class="txtReview" required>
    </div>
    <div class="form-btn">
      <button class="cancel-btn">Cancel</button>
      <input type="submit" value="Simpan" class="simpan-btn">
    </div>
  </form>
`;

export {
  createResItemTemplate,
  createResDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createLikedRestaurantButtonTemplate,
  createReviewTemplate,
};
