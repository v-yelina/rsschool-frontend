/**
 * @jest-environment jsdom
 */
import Filter from '../src/components/view/filter/filter';

const filter = Object.create(Filter.prototype);

describe('uncheckFilters', () => {
    test('uncheck all checkboxes', () => {
        document.body.innerHTML = `<input type="checkbox" name="onsale" id="onsale" class="onsale" checked /><input type="checkbox" class="filter" id="watercolor" name="watercolor" value="watercolor"  checked />`;
        filter.uncheckFilters();
        const onsaleCheckobox = document.querySelector('.onsale') as HTMLInputElement;
        const watercolorCheckobox = document.querySelector('.filter') as HTMLInputElement;
        expect(onsaleCheckobox.checked).toBeFalsy;
        expect(watercolorCheckobox.checked).toBeFalsy;
    });
});
