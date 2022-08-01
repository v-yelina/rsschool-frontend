import { addCars } from '../api/api';
import { ICar } from '../car/car.interface';
import Garage from '../garage/garage';
import Update from '../updateGarage/update';

class Events {
    update: Update;
    garage: Garage;

    constructor() {
        this.update = new Update();
        this.garage = new Garage();
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
                    this.garage.draw();
                }
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

    private async addCar(data: Partial<ICar>) {
        const main = document.querySelector('main');

        addCars(data);
        const garage = document.querySelector('.garage');
        if (garage) {
            const list = garage.lastChild;
            if (list) {
                garage.removeChild(list);
                main!.appendChild(await this.garage.draw());
            }
        }
    }
}

export default Events;
