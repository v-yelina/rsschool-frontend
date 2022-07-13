import Card from '../view/card/card';
import { picturesList } from '../../pictures-list';
import search from '../view/search/search';
import removeSearchText from '../view/search/removeSearchText';
import Sort from '../view/sort/sort';
import Filter from '../view/filter/filter';
import Slider from '../view/slider/slider';

class App {
    priceSlider: Slider;
    yearSlider: Slider;
    card: Card;
    sort: Sort;

    constructor() {
        this.priceSlider = new Slider('.price-slider');
        this.yearSlider = new Slider('.year-slider');
        this.card = new Card();
        this.sort = new Sort();
    }
    start() {
        this.card.draw(picturesList);
        const searchInput = document.querySelector('.search-input');
        if (searchInput) {
            searchInput.addEventListener('keyup', search);
        }
        const searchRemoveBtn = document.querySelector('.search-remove');
        if (searchRemoveBtn) {
            searchRemoveBtn.addEventListener('click', removeSearchText);
        }
        const sortList = document.querySelector('.sort');
        if (sortList) {
            sortList.addEventListener('change', (e: Event) => {
                if (e.target) {
                    const selectedOption = e.target as HTMLOptionElement;
                    localStorage.setItem('sortBy', selectedOption.value);
                    this.sort.sortProducts();
                }
            });
        }
        const filter = new Filter();

        const filterCheckboxes = (document.querySelectorAll('.filter') as unknown) as HTMLInputElement[];

        filterCheckboxes.forEach((checkbox) =>
            checkbox.addEventListener('change', (e: Event) => {
                const selectedOption = e.target as HTMLOptionElement;
                if (checkbox.checked) {
                    const prevValue = localStorage.getItem('filters');
                    if (prevValue) {
                        localStorage.setItem('filters', prevValue + '-' + selectedOption.value);
                    } else {
                        localStorage.setItem('filters', selectedOption.value);
                    }
                } else {
                    filter.removeFilter(selectedOption.value);
                }
                filter.filterProducts();
                this.sort.sortProducts();
            })
        );

        const saleRadio = document.querySelector('.onsale');
        if (saleRadio) {
            saleRadio.addEventListener('change', () => {
                const saleRadioElement = saleRadio as HTMLInputElement;
                if (saleRadioElement.checked) {
                    const prevValue = localStorage.getItem('filters');
                    if (prevValue) {
                        localStorage.setItem('filters', prevValue + '-sale');
                    } else {
                        localStorage.setItem('filters', 'sale');
                    }
                } else {
                    filter.removeFilter('sale');
                }

                filter.filterProducts();
                this.sort.sortProducts();
            });
        }

        const sliders = Array.from(document.querySelectorAll('.slider__input')) as HTMLInputElement[];
        sliders.forEach((slider) => {
            slider.addEventListener('change', (e: Event) => {
                const element = e.target as HTMLElement;

                if (element && element.classList.contains('price-slider')) {
                    this.priceSlider.draw();
                    this.priceSlider.setRangeFilter();
                } else {
                    this.yearSlider.draw();
                    this.yearSlider.setRangeFilter();
                }

                filter.filterProducts();
                this.sort.sortProducts();
            });
        });

        const removeSettings = document.querySelector('.remove-settings-button');
        if (removeSettings) {
            removeSettings.addEventListener('click', () => {
                localStorage.clear();
                filter.filterProducts();
                this.sort.sortProducts();
            });
        }

        filter.filterProducts();
        this.sort.sortProducts();
    }
}

export default App;
