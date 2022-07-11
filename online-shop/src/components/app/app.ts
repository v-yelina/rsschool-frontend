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

        const filterCheckboxes = document.querySelectorAll('.filter');
        filterCheckboxes.forEach((checkbox) =>
            checkbox.addEventListener('change', (e: Event) => {
                const selectedOption = e.target as HTMLOptionElement;
                const prevValue = localStorage.getItem('filters');
                if (prevValue) {
                    localStorage.setItem('filters', prevValue + '-' + selectedOption.value);
                } else {
                    localStorage.setItem('filters', selectedOption.value);
                }
                console.log(localStorage.getItem('filters'));
                filter.filterProducts();
            })
        );
        filter.filterProducts();
    }
}

export default App;
