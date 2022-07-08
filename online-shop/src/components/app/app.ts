import Card from '../view/card/card';
import { picturesList } from '../../pictures-list';
import search from '../view/search/search';
import removeSearchText from '../view/search/removeSearchText';

class App {
    start() {
        const card = new Card();
        card.draw(picturesList);
        const searchInput = document.querySelector('.search-input') as HTMLInputElement;
        searchInput.addEventListener('keyup', search);
        const searchRemoveBtn = document.querySelector('.search-remove') as HTMLImageElement;
        searchRemoveBtn.addEventListener('click', removeSearchText);
    }
}

export default App;
