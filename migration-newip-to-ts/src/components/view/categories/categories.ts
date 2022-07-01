import './categories.css';

class Categories {
    draw() {
        type CategoriesList =
            | 'all'
            | 'business'
            | 'entertainment'
            | 'general'
            | 'health'
            | 'science'
            | 'sports'
            | 'technology';
        const categories: ReadonlyArray<CategoriesList> = [
            'all',
            'business',
            'entertainment',
            'general',
            'health',
            'science',
            'sports',
            'technology',
        ];

        const fragment = document.createDocumentFragment();
        const categoryItemTemp: HTMLTemplateElement | null = document.querySelector('#categoryItemTemp');

        categories.forEach((item) => {
            if (categoryItemTemp != null) {
                const categoryClone = categoryItemTemp.content.cloneNode(true) as HTMLElement;

                if (categoryClone != null) {
                    const categoryItemName = categoryClone.querySelector('.category__item-name') as HTMLSpanElement;
                    categoryItemName.textContent = item;
                    const categoryItem = categoryClone.querySelector('.category__item') as HTMLDivElement;
                    categoryItem.setAttribute('data-category', item);

                    fragment.append(categoryClone);

                    const categories = document.querySelector('.categories') as HTMLDivElement;
                    categories.append(fragment);
                }
            }
        });
    }
}

export default Categories;
