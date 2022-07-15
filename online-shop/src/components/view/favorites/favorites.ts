import Card from '../card/card';
import './favorites.scss';
import { picturesList } from '../../../pictures-list';
import Filter from '../filter/filter';
import Sort from '../sort/sort';

class Favorites {
    public toggle(e: Event) {
        const favStorage = localStorage.getItem('favorites');
        let prevValue: string[] = favStorage ? favStorage.split('-') : [];

        let itemTitle: string;
        if (e.target) {
            const button = e.currentTarget as HTMLElement;
            const element = button.parentElement;
            if (element) {
                const targetTitle = element.querySelector('.card__item-title');

                if (targetTitle) {
                    itemTitle = targetTitle.innerHTML.toLowerCase();
                    if (prevValue.includes(itemTitle)) {
                        prevValue.splice(prevValue.indexOf(itemTitle), 1);
                    } else {
                        prevValue.push(itemTitle);
                    }
                    localStorage.setItem('favorites', prevValue.join('-'));
                }
            }
            const productsWrapper = document.querySelector('.products') as HTMLDivElement;
            productsWrapper.innerHTML = '';
            const card = new Card();
            card.draw(picturesList);
        }
    }

    public checkFav(title: string): boolean {
        const favStorage = localStorage.getItem('favorites');
        let prevValue: string[] = favStorage ? favStorage.split('-') : [];
        if (prevValue.includes(title)) {
            return true;
        }
        return false;
    }
}
export default Favorites;
