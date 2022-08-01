import { getCars } from '../api/api';
import Cars from '../car/cars';

class Garage {
    cars: Cars;

    constructor() {
        this.cars = new Cars();
    }
    public async draw(): Promise<HTMLElement> {
        const garage = document.createElement('section');
        garage.classList.add('garage');
        const garageTitle = document.createElement('h2');
        garageTitle.innerHTML = 'Garage';
        garage.appendChild(garageTitle);
        garage.appendChild(this.cars.draw(await getCars()));

        return garage;
    }
}

export default Garage;
