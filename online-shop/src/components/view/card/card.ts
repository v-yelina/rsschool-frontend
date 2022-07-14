import { Picture } from '../../../picture.inteface';
import './card.scss';

class Card {
    public draw(data: Picture[]) {
        const fragment = document.createDocumentFragment();
        const productCardTemp: HTMLTemplateElement | null = document.querySelector('#productCardTemp');

        data.forEach((item) => {
            if (productCardTemp != null) {
                const cardClone = productCardTemp.content.cloneNode(true) as HTMLElement;

                if (cardClone != null) {
                    const cardItemTitle = cardClone.querySelector('.card__item-title') as HTMLSpanElement;
                    cardItemTitle.textContent = item.title;
                    const cardItemImg = cardClone.querySelector('.card__item-img') as HTMLImageElement;

                    cardItemImg.setAttribute('src', item.url);
                    cardItemImg.setAttribute('alt', item.title);
                    const cardItemYear = cardClone.querySelector('.card__item-year') as HTMLSpanElement;
                    cardItemYear.textContent = item.year + '';
                    const cardItemPrice = cardClone.querySelector('.card__item-price') as HTMLSpanElement;
                    cardItemPrice.textContent = item.price + '$';
                    const cardItem = cardClone.querySelector('.card__item') as HTMLDivElement;

                    cardItem.setAttribute('data-filters', `${item.brush}-${item.author.toLowerCase()}-${item.color}`);
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

                    fragment.append(cardClone);

                    const products = document.querySelector('.products') as HTMLDivElement;

                    products.append(fragment);
                }
            }
        });
    }
}

export default Card;
