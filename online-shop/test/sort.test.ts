import Sort from '../src/components/view/sort/sort';

const sort = Object.create(Sort.prototype);

const localStorageMock = {
    getItem: jest.fn(() => 'price-ascending'),
    setItem: jest.fn(),
    clear: jest.fn(),
};
global.localStorage = (localStorageMock as unknown) as Storage;

describe('sort', () => {
    test('call appropriate method', () => {
        sort.sort = jest.fn();
        sort.sortProducts();
        expect(localStorageMock.getItem).toBeCalledWith('sortBy');
        expect(sort.sort).toBeCalledWith('price', 'ascending');
    });
});
