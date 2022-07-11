class Filter {
    allProducts: Element[];
    filteredProducts: Element[];

    constructor() {
        this.allProducts = Array.from(document.querySelectorAll('.card__item'));
        this.filteredProducts = [];
    }

    public removeFilter(filter: string) {
        let filters = localStorage.getItem('filters');

        if (filters) {
            let filtersArr = filters.split('-');
            if (filtersArr.includes(filter)) {
                filtersArr.splice(filtersArr.indexOf(filter), 1);
                localStorage.setItem('filters', filtersArr.join('-'));
            }
        }
    }

    public filterProducts() {
        const productsWrapper = document.querySelector('.products') as HTMLDivElement;

        if (localStorage.getItem('filters')) {
            let filters = localStorage.getItem('filters');

            if (filters) {
                let filtersArr = filters.split('-');
                let currentProducts =
                    filtersArr.length > 1 ? Array.from(document.querySelectorAll('.card__item')) : this.allProducts;

                filtersArr.forEach((filter) => {
                    productsWrapper.innerHTML = '';

                    for (let product of currentProducts) {
                        console.log('filter', filter, 'product', product);

                        let productElement = product as HTMLElement;
                        const productProperties = productElement.dataset.filters;

                        let productPropertiesArr: string[];
                        if (productProperties) {
                            productPropertiesArr = productProperties.split('-');
                            if (productPropertiesArr.includes(filter)) {
                                productsWrapper.appendChild(product);
                            }
                        }
                    }
                });
            }
        } else {
            for (let product of this.allProducts) {
                productsWrapper.appendChild(product);
            }
        }
    }
}

export default Filter;
