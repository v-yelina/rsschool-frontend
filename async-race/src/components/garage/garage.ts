import { getCars } from '../api/api';
import Cars from '../car/cars';

class Garage {
    cars: Cars;

    constructor() {
        this.cars = new Cars();
    }
    public async draw(): Promise<HTMLElement> {
        const garage = document.createElement('section');
        const availableCars = await getCars();
        garage.classList.add('garage');
        const garageTitle = document.createElement('h2');
        garageTitle.innerHTML = `Garage (${availableCars.count})`;
        const page = document.createElement('h3');
        page.innerHTML = `Page: ${availableCars.page}`;
        garage.appendChild(garageTitle);
        garage.appendChild(page);
        garage.appendChild(this.cars.draw(availableCars.data));
        return garage;
    }
}

export default Garage;
