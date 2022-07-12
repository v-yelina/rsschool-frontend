import Card from '../view/card/card';
import { picturesList } from '../../pictures-list';
import search from '../view/search/search';
import removeSearchText from '../view/search/removeSearchText';
import Sort from '../view/sort/sort';
import Filter from '../view/filter/filter';

class App {
    start() {
        const card = new Card();
        card.draw(picturesList);
        const searchInput = document.querySelector('.search-input') as HTMLInputElement;
        searchInput.addEventListener('keyup', search);
        const searchRemoveBtn = document.querySelector('.search-remove') as HTMLImageElement;
        searchRemoveBtn.addEventListener('click', removeSearchText);
        const sort = new Sort();
        const sortList = document.querySelector('.sort') as HTMLSelectElement;
        sortList.addEventListener('change', (e: Event) => {
            if (e.target) {
                const selectedOption = e.target as HTMLOptionElement;
                localStorage.setItem('sortBy', selectedOption.value);
                sort.sortProducts();
            }
        });
        sort.sortProducts();
        const filter = new Filter();

        const filterCheckboxes = (document.querySelectorAll('.filter') as unknown) as HTMLInputElement[];
        filterCheckboxes.forEach((checkbox) =>
            checkbox.addEventListener('change', (e: Event) => {
                const selectedOption = e.target as HTMLOptionElement;
                if (checkbox.checked) {
                    const prevValue = localStorage.getItem('filters');
                    if (prevValue) {
                        localStorage.setItem('filters', prevValue + '-' + selectedOption.value);
                    } else {
                        localStorage.setItem('filters', selectedOption.value);
                    }
                } else {
                    filter.removeFilter(selectedOption.value);
                }

                filter.filterProducts();
            })
        );
        const saleRadio = document.querySelector('.onsale');
        if (saleRadio) {
            saleRadio.addEventListener('change', () => {
                const saleRadioElement = saleRadio as HTMLInputElement;
                if (saleRadioElement.checked) {
                    const prevValue = localStorage.getItem('filters');
                    if (prevValue) {
                        localStorage.setItem('filters', prevValue + '-sale');
                    } else {
                        localStorage.setItem('filters', 'sale');
                    }
                } else {
                    filter.removeFilter('sale');
                }

                filter.filterProducts();
            });
        }
        filter.filterProducts();
    }
}

export default App;
