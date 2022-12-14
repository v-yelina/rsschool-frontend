/**
 * @jest-environment jsdom
 */
import Slider from '../src/components/view/slider/slider';

const priceSlider = new Slider('.price-slider');
const yearSlider = new Slider('.year-slider');

document.body.innerHTML = `<div class="slider price-slider__container">
                <input
                    type="range"
                    min="5"
                    step="1"
                    max="180"
                    value="0"
                    class="slider__input slider__input-first price-slider"
                />
                <input
                    type="range"
                    min="5"
                    step="1"
                    max="180"
                    value="180"
                    class="slider__input slider__input-second price-slider"
                />
                <p><span class="from">5</span> - <span class="to">180</span></p>
            </div>
            <h3>Year:</h3>
            <div class="slider year-slider__container">
                <input
                    type="range"
                    min="2010"
                    step="1"
                    max="2023"
                    value="2010"
                    class="slider__input slider__input-first year-slider"
                />
                <input
                    type="range"
                    min="2010"
                    step="1"
                    max="2023"
                    value="2023"
                    class="slider__input slider__input-second year-slider"
                />
                <p><span class="from">2010</span> - <span class="to">2023</span></p>
            </div>`;

describe('clearFilter', () => {
    test('set year slider range to default', () => {
        yearSlider.clearFilter();
        const yearSliders = document.querySelectorAll('.year-slider');

        expect((<HTMLInputElement>yearSliders[0]).value).toEqual((<HTMLInputElement>yearSliders[0]).min);
        expect((<HTMLInputElement>yearSliders[1]).value).toEqual((<HTMLInputElement>yearSliders[1]).max);
    });

    test('set price slider range to default', () => {
        priceSlider.clearFilter();
        const priceSliders = document.querySelectorAll('.price-slider');

        expect((<HTMLInputElement>priceSliders[0]).value).toEqual((<HTMLInputElement>priceSliders[0]).min);
        expect((<HTMLInputElement>priceSliders[1]).value).toEqual((<HTMLInputElement>priceSliders[1]).max);
    });
});

describe('setStartEndInputs', () => {
    test('set start and end price inputs according to sliders position', () => {
        priceSlider.clearFilter();
        const priceSliders = document.querySelectorAll('.price-slider');
        const sliderContainer = document.querySelector(`.price-slider__container`)!;
        const startFrom = sliderContainer.querySelector('.from')?.innerHTML;
        const endWith = sliderContainer.querySelector('.to')?.innerHTML;
        expect(startFrom).toEqual((<HTMLInputElement>priceSliders[0]).value);
        expect(endWith).toEqual((<HTMLInputElement>priceSliders[1]).value);
    });
    test('set start and end year inputs according to sliders position', () => {
        priceSlider.clearFilter();
        const yearSliders = document.querySelectorAll('.year-slider');
        const sliderContainer = document.querySelector(`.year-slider__container`)!;
        const startFrom = sliderContainer.querySelector('.from')?.innerHTML;
        const endWith = sliderContainer.querySelector('.to')?.innerHTML;
        expect(startFrom).toEqual((<HTMLInputElement>yearSliders[0]).value);
        expect(endWith).toEqual((<HTMLInputElement>yearSliders[1]).value);
    });
});
