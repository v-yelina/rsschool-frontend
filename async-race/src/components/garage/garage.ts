import { getCars } from '../api/api';
import { state } from '../app/state';
import Cars from '../car/cars';
import Pagination from '../pagination/pagination';

class Garage {
    cars: Cars;
    pagination: Pagination;

    constructor() {
        this.cars = new Cars();
        this.pagination = new Pagination();
    }
    public async draw(page = state.garagePage): Promise<HTMLElement> {
        const garage = document.createElement('section');
        const availableCars = await getCars(page);
        garage.classList.add('garage');
        const garageTitle = document.createElement('h2');
        const allCarsCount = document.createElement('span');
        allCarsCount.classList.add('cars-count');
        allCarsCount.innerHTML = ` (${availableCars.count})`;
        garageTitle.innerHTML = `Garage`;
        garageTitle.appendChild(allCarsCount);
        const pageNum = document.createElement('h3');
        pageNum.innerHTML = `Page: ${availableCars.page}`;
        garage.appendChild(garageTitle);
        garage.appendChild(pageNum);
        garage.appendChild(this.cars.draw(availableCars.data));
        garage.appendChild(this.pagination.createButtons('garage', String(page)));
        return garage;
    }
}

export default Garage;
