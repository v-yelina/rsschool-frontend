/**
 * @jest-environment jsdom
 */

import Card from '../src/components/view/card/card';
import { Picture } from '../src/picture.inteface';

const card = new Card();
const items: Picture[] = [
    {
        title: 'Squares',
        year: 2012,
        price: 45,
        author: 'Valiantsina',
        brush: 'crayon',
        description: 'Black squares',
        amount: 3,
        color: 'black',
        url: './assets/img/squares-black-crayon.jpg',
        onsale: false,
    },
];

document.body.innerHTML = `<main class="products"></main><template id="productCardTemp">
            <article class="card__item">
                <img src="#" alt="" class="card__item-img" />
                <div class="card__item-description">
                    <p class="card__item-header"><span class="card__item-title"></span></p>
                    <p class="card__item-header">Year: <span class="card__item-year"></span></p>
                    <p class="card__item-header"><span class="card__item-price"></span></p>
                    <button class="card__item-btn--more btn">More info</button>
                    <button class="card__item-btn--cart btn">Add to cart</button>
                    <button class="card__item-btn--remove btn hidden">Remove from cart</button>
                </div>
                <button class="fav-btn card__item-fav-btn">
                    <img src="./assets/svg/like-white.svg" alt="Add to favorite" />
                </button>
            </article>
        </template>`;

describe('card draw', () => {
    test('create card', () => {
        card.draw(items);
        const cardItem = document.querySelector('.card__item');
        let cardItemTitle;
        let cardItemYear;
        let cardItemPrice;
        if (cardItem) {
            cardItemTitle = cardItem.querySelector('.card__item-title')?.innerHTML;
            cardItemYear = parseInt((<HTMLElement>cardItem.querySelector('.card__item-year')).innerHTML);
            cardItemPrice = cardItem.querySelector('.card__item-price')?.innerHTML;
        }
        expect(cardItemPrice).toEqual(`${items[0].price}$`);
        expect(cardItemYear).toEqual(items[0].year);
        expect(cardItemTitle).toEqual(items[0].title);
    });
});
