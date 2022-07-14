import { Picture } from '../../../picture.inteface';
import './card.scss';

class Card {
    public draw(data: Picture[]) {
        const fragment = document.createDocumentFragment();
        const productCardTemp: HTMLTemplateElement | null = document.querySelector('#productCardTemp');

        data.forEach((item) => {
            if (productCardTemp) {
                const cardClone = productCardTemp.content.cloneNode(true) as HTMLElement;

                if (cardClone) {
                    const cardItemTitle = cardClone.querySelector('.card__item-title');
                    if (cardItemTitle) cardItemTitle.textContent = item.title;
                    const cardItemImg = cardClone.querySelector('.card__item-img');
                    if (cardItemImg) {
                        cardItemImg.setAttribute('src', item.url);
                        cardItemImg.setAttribute('alt', item.title);
                    }
                    const cardItemYear = cardClone.querySelector('.card__item-year');
                    if (cardItemYear) cardItemYear.textContent = item.year + '';

                    const cardItem = cardClone.querySelector('.card__item') as HTMLDivElement;
                    if (cardItem)
                        cardItem.setAttribute(
                            'data-filters',
                            `${item.brush}-${item.author.toLowerCase()}-${item.color}`
                        );
                    const cardItemPrice = cardClone.querySelector('.card__item-price');
                    if (cardItemPrice) {
                        cardItemPrice.textContent = item.price + '$';
                        if (item.onsale && item.salePrice) {
                            cardItemPrice.classList.add('card__item_sale-price');
                            const salePrice = document.createElement('span');
                            salePrice.classList.add('card__item-price_sale');
                            salePrice.innerHTML = `${item.price}$`;
                            cardItemPrice.innerHTML = `${item.salePrice}$`;
                            cardItemPrice.before(salePrice);
                            const salePercent = document.createElement('span');
                            salePercent.classList.add('card__item_sale-percent');
                            salePercent.innerHTML = `-${Math.round(100 - (item.salePrice * 100) / item.price)}%`;
                            salePrice.after(salePercent);
                            cardItem.dataset.filters += '-sale';
                        }
                    }

                    fragment.append(cardClone);

                    const products = document.querySelector('.products');
                    if (products) products.append(fragment);
                }
            }
        });
    }
}

export default Card;
