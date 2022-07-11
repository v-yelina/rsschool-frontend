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
            productsWrapper.innerHTML = '';
            let filters = localStorage.getItem('filters');

            if (filters) {
                let filtersArr = filters.split('-');

                for (let product of this.allProducts) {
                    let productElement = product as HTMLElement;
                    const productProperties = productElement.dataset.filters;

                    let productPropertiesArr;
                    if (productProperties) {
                        productPropertiesArr = productProperties.split('-');

                        if (productPropertiesArr && productPropertiesArr[0] !== '') {
                            productPropertiesArr.forEach((property) => {
                                if (filtersArr.includes(property)) {
                                    productsWrapper.appendChild(product);
                                }
                            });
                        }
                    }
                }
            }
        } else {
            for (let product of this.allProducts) {
                productsWrapper.appendChild(product);
            }
        }
    }
}

export default Filter;
