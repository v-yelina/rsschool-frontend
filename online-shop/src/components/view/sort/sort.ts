class Sort {
    public sortProducts(): void {
        const sortBy = localStorage.getItem('sortBy');
        switch (sortBy) {
            case 'price-ascending':
                this.sort('price', 'ascending');
                return;
            case 'price-descending':
                this.sort('price', 'descending');
                return;
            case 'title-ascending':
                this.sort('title', 'ascending');
                return;
            case 'title-descending':
                this.sort('title', 'descending');
                return;
            case 'year-ascending':
                this.sort('year', 'ascending');
                return;
            case 'year-descending':
                this.sort('year', 'descending');
                return;
        }
    }

    private sort(filter: string, direction: string) {
        const products = Array.from(document.querySelectorAll('.card__item'));

        const filterClass =
            filter === 'price' ? '.card__item-price' : filter === 'title' ? '.card__item-title' : '.card__item-year';

        if (direction === 'ascending' && filter === 'title') {
            products.sort((a, b) => {
                return (a.querySelector(filterClass)?.innerHTML as string).localeCompare(
                    b.querySelector(filterClass)?.innerHTML as string
                );
            });
        } else if (direction === 'descending' && filter === 'title') {
            products.sort((a, b) => {
                return (b.querySelector(filterClass)?.innerHTML as string).localeCompare(
                    a.querySelector(filterClass)?.innerHTML as string
                );
            });
        } else if (direction === 'ascending') {
            products.sort(
                (a, b) =>
                    parseFloat(a.querySelector(filterClass)?.innerHTML as string) -
                    parseFloat(b.querySelector(filterClass)?.innerHTML as string)
            );
        } else if (direction === 'descending') {
            products.sort(
                (a, b) =>
                    parseFloat(b.querySelector(filterClass)?.innerHTML as string) -
                    parseFloat(a.querySelector(filterClass)?.innerHTML as string)
            );
        }
        const productsWrapper = document.querySelector('.products') as HTMLDivElement;
        productsWrapper.innerHTML = '';
        products.forEach((product) => productsWrapper.appendChild(product));
    }
}

export default Sort;
