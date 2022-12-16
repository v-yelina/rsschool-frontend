import Favorites from '../src/components/view/favorites/favorites';

const favorites: Favorites = Object.create(Favorites.prototype);
const localStorageMock = {
    getItem: jest.fn(() => 'flower-sun-cloud'),
    setItem: jest.fn(),
    clear: jest.fn(),
};
global.localStorage = (localStorageMock as unknown) as Storage;

describe('checkFav', () => {
    test('check if product is in favorites', () => {
        const isFavorite = favorites.checkFav('sun');
        expect(localStorageMock.getItem).toBeCalledWith('favorites');
        expect(isFavorite).toBeTruthy;
    });

    test('check if product is not in favorites', () => {
        const isFavorite = favorites.checkFav('cat');
        expect(localStorageMock.getItem).toBeCalledWith('favorites');
        expect(isFavorite).toBeFalsy;
    });
});
