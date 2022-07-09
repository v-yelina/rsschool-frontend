class Sort {
    public sortProducts(): void {
        const sortBy = localStorage.getItem('sortBy');
        switch (sortBy) {
            case 'price-ascending':
                this.sortByPrice('ascending');
                return;
            case 'price-descending':
                this.sortByPrice('descending');
                return;
            case 'title-ascending':
                return;
            case 'title-descending':
                return;
            case 'year-ascending':
                return;
            case 'year-descending':
                return;
        }
    }

    private sortByPrice(direction: string) {
        const products = Array.from(document.querySelectorAll('.card__item'));

        if (direction === 'ascending') {
            products.sort(
                (a, b) =>
                    parseFloat(a.querySelector('.card__item-price')?.innerHTML as string) -
                    parseFloat(b.querySelector('.card__item-price')?.innerHTML as string)
            );
        } else if (direction === 'descending') {
            products.sort(
                (a, b) =>
                    parseFloat(b.querySelector('.card__item-price')?.innerHTML as string) -
                    parseFloat(a.querySelector('.card__item-price')?.innerHTML as string)
            );
        }
        const productsWrapper = document.querySelector('.products') as HTMLDivElement;
        productsWrapper.innerHTML = '';
        products.forEach((product) => productsWrapper.appendChild(product));
    }
}

export default Sort;
