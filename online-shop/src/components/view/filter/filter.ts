import Favorites from '../favorites/favorites';

class Filter {
    allProducts: Element[];
    filteredProducts: Element[];
    favorites: Favorites;

    constructor() {
        this.allProducts = Array.from(document.querySelectorAll('.card__item'));
        this.filteredProducts = [];
        this.favorites = new Favorites();
    }

    public removeFilter(filter: string) {
        const filters = localStorage.getItem('filters');

        if (filters) {
            const filtersArr = filters.split('-');
            const regFilter = new RegExp(`^${filter}`);
            for (const ind in filtersArr) {
                if (regFilter.test(filtersArr[ind])) {
                    filtersArr.splice(+ind, 1);
                    localStorage.setItem('filters', filtersArr.join('-'));
                }
            }
        }
    }

    public filterProducts() {
        const productsWrapper = document.querySelector('.products') as HTMLDivElement;

        const filters = localStorage.getItem('filters');

        if (filters) {
            const filtersArr = filters.split('-');

            productsWrapper.innerHTML = '';

            filtersArr.forEach((filter) => {
                if (filter.startsWith('price') || filter.startsWith('year')) {
                    const tempFiltersArr = [...filtersArr];
                    const regFilter = new RegExp(`^price|year`);
                    for (const ind in tempFiltersArr) {
                        if (regFilter.test(tempFiltersArr[ind])) {
                            tempFiltersArr.splice(+ind, 1);
                        }
                    }

                    const currentProducts =
                        tempFiltersArr.length > 1
                            ? Array.from(document.querySelectorAll('.card__item'))
                            : this.allProducts;
                    productsWrapper.innerHTML = '';

                    const rangeArr = filter.split('*');

                    const filteredProducts = currentProducts.reduce((filtered: Element[], item: Element) => {
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
                    filteredProducts.forEach((product) => {
                        const productTitleEL = product.querySelector('.card__item-title');
                        let productTitle: string;
                        if (productTitleEL) {
                            productTitle = productTitleEL.innerHTML.toLowerCase();
                            console.log(productTitle);

                            let isFav: boolean = this.favorites.checkFav(productTitle);
                            const favBtn = product.querySelector('.fav-btn img');
                            console.log(isFav && favBtn);

                            if (isFav && favBtn) {
                                favBtn.setAttribute('src', '../../../assets/svg/like-black.svg');
                            }
                        }
                        productsWrapper.appendChild(product);
                    });
                } else {
                    const checkboxFilter = document.querySelector(`#${filter}`) as HTMLInputElement;
                    if (checkboxFilter) {
                        checkboxFilter.checked = true;
                    }

                    for (const product of this.allProducts) {
                        const productElement = product as HTMLElement;
                        const productProperties = productElement.dataset.filters;

                        let productPropertiesArr: string[];
                        if (productProperties) {
                            productPropertiesArr = productProperties.split('-');
                            if (productPropertiesArr.includes(filter)) {
                                productsWrapper.appendChild(product);
                            }
                        }
                    }
                }
            });
        } else {
            for (const product of this.allProducts) {
                productsWrapper.appendChild(product);
            }
        }
    }
}

export default Filter;
