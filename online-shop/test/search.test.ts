/**
 * @jest-environment jsdom
 */
import Search from '../src/components/view/search/search';

const search = Object.create(Search.prototype);

describe('removeSearch', () => {
    test('remove text from search input', () => {
        search.searchProduct = jest.fn();
        document.body.innerHTML = `<input type="text" placeholder="Search..." class="search-input" autofocus value="Search string"/>`;
        const searchInput = document.querySelector('.search-input') as HTMLInputElement;
        search.removeSearchText();
        expect(searchInput.value).toEqual('');
    });
});
