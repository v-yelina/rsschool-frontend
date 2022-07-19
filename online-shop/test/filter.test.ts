import Filter from '../src/components/view/filter/filter';

const filter = Object.create(Filter.prototype);
const localStorageMock = {
    getItem: jest.fn(() => 'color*yellow*grey-author*vasilisa-price*54*180-sale'),
    setItem: jest.fn(),
    clear: jest.fn(),
};
global.localStorage = (localStorageMock as unknown) as Storage;

// describe('uncheckFilters', () => {
//     test('uncheck all checkboxes', () => {
//         document.body.innerHTML = `<input type="checkbox" name="onsale" id="onsale" class="onsale" checked /><input type="checkbox" class="filter" id="watercolor" name="watercolor" value="watercolor"  checked />`;
//         filter.uncheckFilters();
//         const onsaleCheckobox = document.querySelector('.onsale') as HTMLInputElement;
//         const watercolorCheckobox = document.querySelector('.filter') as HTMLInputElement;
//         expect(onsaleCheckobox.checked).toBeFalsy;
//         expect(watercolorCheckobox.checked).toBeFalsy;
//     });
// });

describe('removeFilter', () => {
    test('remove color filter from local storage', () => {
        filter.removeFilter('color*yellow');
        expect(localStorageMock.getItem).toBeCalledWith('filters');
        expect(localStorageMock.setItem).toHaveBeenCalledWith(
            'filters',
            'color*grey-author*vasilisa-price*54*180-sale'
        );
    });
    test('remove sale filter from local storage', () => {
        filter.removeFilter('sale');
        expect(localStorageMock.getItem).toBeCalledWith('filters');
        expect(localStorageMock.setItem).toHaveBeenCalledWith(
            'filters',
            'color*yellow*grey-author*vasilisa-price*54*180'
        );
    });
    test('remove price filter from local storage', () => {
        filter.removeFilter('price');
        expect(localStorageMock.getItem).toBeCalledWith('filters');
        expect(localStorageMock.setItem).toHaveBeenCalledWith('filters', 'color*yellow*grey-author*vasilisa-sale');
    });
});
