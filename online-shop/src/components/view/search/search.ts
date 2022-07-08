import { picturesList } from '../../../pictures-list';
import Card from '../card/card';
import './search.scss';

const search = (): void => {
    const card = new Card();
    const productsWrapper = document.querySelector('.products') as HTMLDivElement;
    const searchInput = document.querySelector('.search-input') as HTMLInputElement;

    const text = searchInput.value.toLowerCase();
    if (!text) {
        productsWrapper.innerHTML = '';
        card.draw(picturesList);
        return;
    }
    const products = document.querySelectorAll('.card__item');

    const filteredProducts = Array.from(products).filter((product) =>
        product.querySelector('.card__item-title')?.innerHTML.toLowerCase().includes(text)
    );

    if (filteredProducts.length) {
        productsWrapper.innerHTML = '';
        filteredProducts.map((product) => productsWrapper.appendChild(product));
    } else {
        const errorMessage = document.createElement('div');
        errorMessage.classList.add('error');
        errorMessage.innerHTML = 'Sorry, nothing could be found. You can try another search request.';
        productsWrapper.innerHTML = '';
        productsWrapper.appendChild(errorMessage);
    }
};

export default search;
