class Filter {
    allProducts: Element[];
    filteredProducts: Element[];

    constructor() {
        this.allProducts = Array.from(document.querySelectorAll('.card__item'));
        this.filteredProducts = [];
    }

    public filterProducts() {
        if (localStorage.getItem('filters')) {
            const productsWrapper = document.querySelector('.products') as HTMLDivElement;
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
                                    console.log('+');

                                    console.log(productsWrapper);

                                    productsWrapper.appendChild(product);
                                }
                            });
                        }
                    }
                }
            }
        }
    }
}

export default Filter;
