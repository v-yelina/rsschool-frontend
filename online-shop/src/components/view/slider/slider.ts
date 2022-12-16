import Filter from '../filter/filter';
import './slider.scss';

class Slider {
    className: string;
    filter: Filter;

    constructor(className: string) {
        this.className = className;
        this.filter = new Filter();
    }

    public draw() {
        const sliders = Array.from(document.querySelectorAll(this.className)) as HTMLInputElement[];

        if (+sliders[0].value > +sliders[1].value) {
            const temp = sliders[1].value;
            sliders[1].value = sliders[0].value;
            sliders[0].value = temp;
        }

        if (+sliders[1].value < +sliders[0].value) {
            const temp = sliders[0].value;
            sliders[0].value = sliders[1].value;
            sliders[1].value = temp;
        }
    }

    public setRangeFilter() {
        const sliders = Array.from(document.querySelectorAll(this.className)) as HTMLInputElement[];
        this.setStartEndInputs();

        const sliderType = this.className.split('-')[0].slice(1);
        this.filter.removeFilter(sliderType);
        const sliderFilter = `${sliderType}*${sliders[0].value}*${sliders[1].value}`;

        const prevValue = localStorage.getItem('filters');

        if (prevValue) {
            localStorage.setItem('filters', prevValue + '-' + sliderFilter);
        } else {
            localStorage.setItem('filters', sliderFilter);
        }
    }

    public clearFilter() {
        const sliders = Array.from(document.querySelectorAll(this.className)) as HTMLInputElement[];
        sliders[0].value = sliders[0].min;
        sliders[1].value = sliders[1].max;
        this.setStartEndInputs();
    }

    private setStartEndInputs() {
        const sliderContainer = document.querySelector(`${this.className}__container`);
        if (sliderContainer) {
            const startFrom = sliderContainer.querySelector('.from');
            const endWith = sliderContainer.querySelector('.to');
            const sliders = Array.from(document.querySelectorAll(this.className)) as HTMLInputElement[];
            if (startFrom && endWith) {
                startFrom.innerHTML = sliders[0].value;
                endWith.innerHTML = sliders[1].value;
            }
        }
    }
}

export default Slider;
