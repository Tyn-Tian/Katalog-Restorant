import CONFIG from '../globals/config';
import { createReviewTemplate } from '../views/templates/template-creator';

const reviewButtonInitiator = {
  init({ reviewContainer, id }) {
    this._reviewContainer = reviewContainer;
    this._id = id;

    this._renderAddButton();
  },

  _renderAddButton() {
    this._reviewContainer.innerHTML = createReviewTemplate();

    const addBtn = document.querySelector('.add-btn');
    const form = document.querySelector('form');
    addBtn.addEventListener('click', () => {
      form.style.display = 'block';
      addBtn.style.display = 'none';

      this._cancelButton(form, addBtn);
      this._submitButton(form, addBtn, this._id);
    });
  },

  _cancelButton(form, addBtn) {
    const cancelBtn = form.querySelector('.cancel-btn');
    cancelBtn.addEventListener('click', () => {
      form.style.display = 'none';
      addBtn.style.display = 'block';
    });
  },

  _submitButton(form, addBtn, id) {
    const txtName = form.querySelector('.txtName');
    const txtReview = form.querySelector('.txtReview');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      fetch(`${CONFIG.BASE_URL}review`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          id,
          name: txtName.value,
          review: txtReview.value,
        }),
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
      txtName.value = '';
      txtReview.value = '';
      form.style.display = 'none';
      addBtn.style.display = 'block';
    });
  },
};

export default reviewButtonInitiator;
