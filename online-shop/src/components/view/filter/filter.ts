import { picturesList } from '../../../pictures-list';
import Card from '../card/card';
import Favorites from '../favorites/favorites';

class Filter {
    readonly allProducts: Element[];
    filteredProducts: Element[];
    favorites: Favorites;
    productsWrapper: HTMLDivElement;
    card: Card;

    constructor() {
        this.allProducts = Array.from(document.querySelectorAll('.card__item'));
        this.filteredProducts = [];
        this.favorites = new Favorites();
        this.productsWrapper = document.querySelector('.products') as HTMLDivElement;
        this.card = new Card();
    }

    public removeFilter(filter: string) {
        const filters = localStorage.getItem('filters');

        if (filters) {
            const filtersArr = filters.split('-');
            if (filter.startsWith('color') || filter.startsWith('brush') || filter.startsWith('author')) {
                const filterToRemove = filter.split('*');
                const regFilter = new RegExp(`^${filterToRemove[0]}`);
                for (const ind in filtersArr) {
                    if (regFilter.test(filtersArr[ind])) {
                        const presentFilter = filtersArr[ind].split('*');
                        if (presentFilter.length > 2) {
                            presentFilter.splice(presentFilter.indexOf(filterToRemove[1]), 1);
                            filtersArr[ind] = presentFilter.join('*');
                        } else {
                            filtersArr.splice(+ind, 1);
                        }
                    }
                }
            } else {
                const regFilter = new RegExp(`^${filter}`);
                for (const ind in filtersArr) {
                    if (regFilter.test(filtersArr[ind])) {
                        filtersArr.splice(+ind, 1);
                    }
                }
            }
            localStorage.setItem('filters', filtersArr.join('-'));
        }
    }

    public filterProducts() {
        const filtersStr = localStorage.getItem('filters');
        let filtersArr: string[];
        if (filtersStr) {
            filtersArr = filtersStr.split('-');

            if (filtersArr.length === 0 || filtersArr[0] === '') {
                this.card.draw(picturesList);
            } else {
                filtersArr.forEach((filter: string) => {
                    if (filter.startsWith('price') || filter.startsWith('year')) {
                        this.filterByPriceAndYear(filter);
                    } else if (filter.startsWith('sale') || filter.startsWith('favorite')) {
                        this.filterBySaleAndFavorite(filter);
                    } else {
                        this.filterByProperty(filter);
                    }
                });
            }
            this.drawProducts();
            this.filteredProducts = [];
        } else {
            this.productsWrapper.innerHTML = '';
            for (const product of this.allProducts) {
                this.productsWrapper.appendChild(product);
            }
        }
    }

    private filterByPriceAndYear(filter: string) {
        const currentProducts = this.filteredProducts.length >= 1 ? [...this.filteredProducts] : [...this.allProducts];
        const rangeArr = filter.split('*');
        const className = `.${rangeArr[0]}-slider`;

        const newFiltered: Element[] = currentProducts.reduce((filtered: Element[], item: Element) => {
            const itemValue = item.querySelector(`.card__item-${rangeArr[0]}`);
            if (
                itemValue &&
                parseInt(itemValue.innerHTML) >= +rangeArr[1] &&
                parseInt(itemValue.innerHTML) <= +rangeArr[2]
            ) {
                filtered.push(item);
            }
            return filtered;
        }, []);
        this.filteredProducts = [...newFiltered];
        const sliders = Array.from(document.querySelectorAll(className)) as HTMLInputElement[];

        if (sliders) {
            sliders[0].value = rangeArr[1];
            sliders[1].value = rangeArr[2];
        }
        const sliderContainer = document.querySelector(`${className}__container`);
        if (sliderContainer) {
            const startFrom = sliderContainer.querySelector('.from');
            const endWith = sliderContainer.querySelector('.to');
            if (startFrom && endWith) {
                startFrom.innerHTML = sliders[0].value;
                endWith.innerHTML = sliders[1].value;
            }
        }
    }

    private filterBySaleAndFavorite(filter: string) {
        const currentProducts = this.filteredProducts.length >= 1 ? [...this.filteredProducts] : [...this.allProducts];
        const newFiltered: Element[] = [];

        const filterClass = filter === 'sale' ? '.onsale' : '.isfavorite';
        const filterCheckbox = document.querySelector(filterClass) as HTMLInputElement;
        if (filterCheckbox) filterCheckbox.checked = true;

        for (const product of currentProducts) {
            const productElement = product as HTMLElement;
            const productProperties = productElement.dataset.filters;

            let productPropertiesArr: string[];
            if (productProperties) {
                productPropertiesArr = productProperties.split('-');
                if (productPropertiesArr.includes(filter)) {
                    newFiltered.push(product);
                }
            }
        }
        this.filteredProducts = [...newFiltered];
    }

    private filterByProperty(filter: string) {
        const currentProducts = this.filteredProducts.length >= 1 ? [...this.filteredProducts] : [...this.allProducts];
        const newFiltered: Element[] = [];

        const filterArr = filter.split('*');
        const filters = filterArr.slice(1);

        filters.forEach((filter) => {
            const checkboxFilter = document.querySelector(`#${filter}`) as HTMLInputElement;
            if (checkboxFilter) {
                checkboxFilter.checked = true;
            }

            for (const product of currentProducts) {
                const productElement = product as HTMLElement;
                const productProperties = productElement.dataset.filters;

                let productPropertiesArr: string[];
                if (productProperties) {
                    productPropertiesArr = productProperties.split('-');

                    if (productPropertiesArr.includes(filter)) {
                        newFiltered.push(product);
                    }
                }
            }
        });
        this.filteredProducts = [...newFiltered];
    }

    private drawProducts() {
        this.productsWrapper.innerHTML = '';
        if (this.filteredProducts.length) {
            for (const product of this.filteredProducts) {
                const productTitleEL = product.querySelector('.card__item-title');
                let productTitle: string;
                if (productTitleEL) {
                    productTitle = productTitleEL.innerHTML.toLowerCase();

                    const isFav: boolean = this.favorites.checkFav(productTitle);
                    const favBtn = product.querySelector('.fav-btn img');

                    if (isFav && favBtn) {
                        favBtn.setAttribute('src', '../../../assets/svg/like-black.svg');
                    }
                }
                this.productsWrapper.appendChild(product);
            }
        } else {
            const errorMessage = document.createElement('div');
            errorMessage.classList.add('error');
            errorMessage.innerHTML = 'Sorry, nothing could be found. You can try another search request.';
            this.productsWrapper.appendChild(errorMessage);
        }
    }
}

export default Filter;
