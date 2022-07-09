import Card from '../view/card/card';
import { picturesList } from '../../pictures-list';
import search from '../view/search/search';
import removeSearchText from '../view/search/removeSearchText';
import Sort from '../view/sort/sort';

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
    }
}

export default App;
