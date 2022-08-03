import { addCars, getOneCar, removeCars } from '../api/api';
import { state } from '../app/state';
import { ICar } from '../car/car.interface';
import Garage from '../garage/garage';
import Generate from '../generateCars/generate';
import Update from '../updateGarage/update';

class Events {
    update: Update;
    garage: Garage;
    generate: Generate;

    constructor() {
        this.update = new Update();
        this.garage = new Garage();
        this.generate = new Generate();
    }
    public create(): void {
        const headerBtn = document.querySelectorAll('.btn--header');
        headerBtn.forEach((btn) => btn.addEventListener('click', (e) => this.changeTab(e)));
        const createBtn = document.querySelector('.update-form--create button');
        if (createBtn) {
            createBtn.addEventListener('click', () => {
                const data = this.update.createCar();
                if (data) {
                    this.addCar(data);
                }
            });
        }
        const generateBtn = document.querySelector('.generate-btn');
        if (generateBtn) {
            generateBtn.addEventListener('click', () => {
                this.generate.start();
                this.updateGarage();
            });
        }
    }

    private changeTab(e: Event): void {
        const targetButton = e.target as HTMLButtonElement;
        const garage = document.querySelector('.garage');
        const winners = document.querySelector('.winners');
        if (targetButton.classList.contains('btn--garage') && garage && winners) {
            garage.classList.remove('hidden');
            winners.classList.add('hidden');
        } else if (targetButton.classList.contains('btn--winners') && garage && winners) {
            garage.classList.add('hidden');
            winners.classList.remove('hidden');
        }
    }

    public getCarId(e: Event): string | undefined {
        const button = e.target as HTMLElement;
        const carHeader = button.parentNode as HTMLElement;
        const car = carHeader.parentNode as HTMLElement;

        const carID = car.dataset.id;

        if (carID) {
            return carID;
        }
    }

    private addCar(data: Partial<ICar>) {
        addCars(data);
        this.updateGarage();
    }

    public deleteCar(id: string) {
        removeCars(id);
        this.updateGarage();
    }

    public async selectCar(e: Event) {
        const carId = this.getCarId(e);
        const updateContainer = document.querySelector('.update-form--update');
        const name = updateContainer?.querySelector('.input-name') as HTMLInputElement;
        const color = updateContainer?.querySelector('.input-color') as HTMLInputElement;
        if (name && color && carId) {
            name.setAttribute('data-id', carId);
            const car = await getOneCar(carId);
            name.value = car.name;
            color.value = car.color;
        }
    }

    public async updateGarage(page = state.page) {
        const main = document.querySelector('main');

        if (main) {
            const garage = main.querySelector('.garage');
            if (garage) {
                main.removeChild(garage);
                main.appendChild(await this.garage.draw(page));
            }
        }
    }
}

export default Events;
