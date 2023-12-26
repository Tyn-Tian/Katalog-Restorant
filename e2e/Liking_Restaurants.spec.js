/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('liking one Restaurant', async ({ I }) => {
  I.seeElement('.card>div>h3>a');

  const firstFilm = locate('.card>div>h3>a').first();
  const firstFilmTitle = await I.grabTextFrom(firstFilm);
  I.click(firstFilm);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.card');
  const likedFilmTitle = await I.grabTextFrom('.card>div>h3>a');

  assert.strictEqual(firstFilmTitle, likedFilmTitle);
});

Scenario('Unlike one Restaurant', async ({ I }) => {
  I.seeElement('.card>div>h3>a');

  const firstFilm = locate('.card>div>h3>a').first();
  const firstFilmTitle = await I.grabTextFrom(firstFilm);
  I.click(firstFilm);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.card');
  const likedFilmTitle = await I.grabTextFrom('.card>div>h3>a');

  assert.strictEqual(firstFilmTitle, likedFilmTitle);

  I.click(firstFilm);
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.dontSee(firstFilm);
});
