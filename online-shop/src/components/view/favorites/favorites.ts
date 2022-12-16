import Card from '../card/card';
import './favorites.scss';
import { picturesList } from '../../../pictures-list';

class Favorites {
    public toggle(e: Event) {
        const favStorage = localStorage.getItem('favorites');
        const prevValue: string[] = favStorage ? favStorage.split('-') : [];

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
                        element.dataset.filters?.replace('-favorite', '');
                    } else {
                        prevValue.push(itemTitle);
                        element.dataset.filters += '-favorite';
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
        const prevValue: string[] = favStorage ? favStorage.split('-') : [];
        if (prevValue.includes(title)) {
            return true;
        }
        return false;
    }
}
export default Favorites;
