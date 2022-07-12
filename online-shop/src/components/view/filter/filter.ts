class Filter {
    allProducts: Element[];
    filteredProducts: Element[];

    constructor() {
        this.allProducts = Array.from(document.querySelectorAll('.card__item'));
        this.filteredProducts = [];
    }

    public removeFilter(filter: string) {
        const filters = localStorage.getItem('filters');

        if (filters) {
            const filtersArr = filters.split('-');
            if (filtersArr.includes(filter)) {
                filtersArr.splice(filtersArr.indexOf(filter), 1);
                localStorage.setItem('filters', filtersArr.join('-'));
            }
        }
    }

    public filterProducts() {
        const productsWrapper = document.querySelector('.products') as HTMLDivElement;

        if (localStorage.getItem('filters')) {
            const filters = localStorage.getItem('filters');

            if (filters) {
                const filtersArr = filters.split('-');
                const currentProducts =
                    filtersArr.length > 1 ? Array.from(document.querySelectorAll('.card__item')) : this.allProducts;

                filtersArr.forEach((filter) => {
                    productsWrapper.innerHTML = '';

                    for (const product of currentProducts) {
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
                });
            }
        } else {
            for (const product of this.allProducts) {
                productsWrapper.appendChild(product);
            }
        }
    }
}

export default Filter;
