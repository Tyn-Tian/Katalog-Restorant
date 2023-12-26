/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */
const itActsAsFavoriteMovieModel = (favoriteRes) => {
  it('should return the restaurant that has been added', async () => {
    favoriteRes.putRestaurant({ id: 1 });
    favoriteRes.putRestaurant({ id: 2 });

    expect(await favoriteRes.getRestaurant(1))
      .toEqual({ id: 1 });
    expect(await favoriteRes.getRestaurant(2))
      .toEqual({ id: 2 });
    expect(await favoriteRes.getRestaurant(3))
      .toEqual(undefined);
  });

  it('should refuse a restaurant from being added if it does not have the correct property', async () => {
    favoriteRes.putRestaurant({ aProperty: 'property' });

    expect(await favoriteRes.getAllRestaurant())
      .toEqual([]);
  });

  it('can return all of the restaurant that have been added', async () => {
    favoriteRes.putRestaurant({ id: 1 });
    favoriteRes.putRestaurant({ id: 2 });

    expect(await favoriteRes.getAllRestaurant())
      .toEqual([
        { id: 1 },
        { id: 2 },
      ]);
  });

  it('should remove favorite restaurant', async () => {
    favoriteRes.putRestaurant({ id: 1 });
    favoriteRes.putRestaurant({ id: 2 });
    favoriteRes.putRestaurant({ id: 3 });

    await favoriteRes.deleteRestaurant(1);

    expect(await favoriteRes.getAllRestaurant())
      .toEqual([
        { id: 2 },
        { id: 3 },
      ]);
  });

  it('should handle request to remove a restaurant even though the restaurant has not been added', async () => {
    favoriteRes.putRestaurant({ id: 1 });
    favoriteRes.putRestaurant({ id: 2 });
    favoriteRes.putRestaurant({ id: 3 });

    await favoriteRes.deleteRestaurant(4);

    expect(await favoriteRes.getAllRestaurant())
      .toEqual([
        { id: 1 },
        { id: 2 },
        { id: 3 },
      ]);
  });
};

export { itActsAsFavoriteMovieModel };
