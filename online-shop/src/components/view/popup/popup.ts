import { picturesList } from '../../../pictures-list';
import './popup.scss';

class Popup {
    public createPopup = (e: Event) => {
        console.log('hi');

        const productImg = e.target as HTMLElement;
        const product = productImg.parentElement;
        if (product) {
            const productTitleEl = product.querySelector('.card__item-title');

            let productTitle: string;
            if (productTitleEl) {
                productTitle = productTitleEl.innerHTML;

                const picture = picturesList.filter((picture) => picture.title === productTitle)[0];

                const fragment = document.createDocumentFragment();
                const popupTemp: HTMLTemplateElement | null = document.querySelector('#popupTemp');
                if (popupTemp) {
                    const popupClone = popupTemp.content.cloneNode(true) as HTMLElement;
                    if (popupClone) {
                        const popupTitle = popupClone.querySelector('.popup__item-title');
                        if (popupTitle) popupTitle.textContent = picture.title;

                        const popupImg = popupClone.querySelector('.popup__item-img');
                        if (popupImg) {
                            popupImg.setAttribute('src', picture.url);
                            popupImg.setAttribute('alt', picture.title);
                        }
                        const popupYear = popupClone.querySelector('.popup__item-year');
                        if (popupYear) popupYear.textContent = picture.year + '';
                        const popupPrice = popupClone.querySelector('.popup__item-price');
                        if (popupPrice) {
                            popupPrice.textContent = picture.price + '$';

                            if (picture.onsale && picture.salePrice) {
                                popupPrice.classList.add('card__item-price_sale');
                                const salePrice = document.createElement('span');
                                salePrice.classList.add('card__item_sale-price');
                                salePrice.innerHTML = `${picture.salePrice}$`;
                                popupPrice.after(salePrice);
                                const salePercent = document.createElement('span');
                                salePercent.classList.add('card__item_sale-percent');
                                salePercent.innerHTML = `-${Math.round(
                                    100 - (picture.salePrice * 100) / picture.price
                                )}%`;
                                salePrice.after(salePercent);
                            }
                        }
                        const popupAuthor = popupClone.querySelector('.popup__item-author');
                        if (popupAuthor) popupAuthor.innerHTML += picture.author;
                        const popupColor = popupClone.querySelector('.popup__item-color');
                        if (popupColor) popupColor.innerHTML += picture.color;
                        const popupBrush = popupClone.querySelector('.popup__item-brush');
                        if (popupBrush) popupBrush.innerHTML += picture.brush;
                        const popupDescription = popupClone.querySelector('.popup__item-descr');
                        if (popupDescription) popupDescription.innerHTML += picture.description;
                        const closeBtn = popupClone.querySelector('.btn-cross');
                        if (closeBtn) closeBtn.addEventListener('click', this.closePopup);

                        const popup = popupClone.querySelector('.popup__item');
                        if (popup) popup.addEventListener('click', this.closePopup);

                        fragment.append(popupClone);
                        const main = document.querySelector('main');
                        if (main) {
                            main.append(fragment);
                            const body = document.querySelector('body');
                            if (body) {
                                body.style.overflow = 'hidden';
                            }
                        }
                    }
                }
            }
        }

        // popup.onmouseover = (e) => {
        //     if (e.target === e.currentTarget) popupBtn.classList.add('hovered');
        // };

        // popup.onmouseout = (e) => {
        //     if (e.target === e.currentTarget) popupBtn.classList.remove('hovered');
        // };
    };

    public closePopup = () => {
        const main = document.querySelector('main');
        if (main) {
            const lastChild = main.lastElementChild;
            if (lastChild) {
                main.removeChild(lastChild);
            }
            const body = document.querySelector('body');
            if (body) {
                body.style.overflow = 'visible';
            }
        }
    };
}

export default Popup;
