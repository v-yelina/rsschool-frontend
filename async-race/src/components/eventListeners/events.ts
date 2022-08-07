import { addCars, getOneCar, removeCars, removeWinners, updateCars } from '../api/api';
import { state } from '../app/state';
import { Color, ICar } from '../car/car.interface';
import Drive from '../drive/drive';
import { EngineMode } from '../drive/drive.interface';
import Garage from '../garage/garage';
import Generate from '../generateCars/generate';
import Update from '../updateGarage/update';
import Winners from '../winners/winners';

class Events {
    update: Update;
    garage: Garage;
    generate: Generate;
    winners: Winners;

    constructor() {
        this.update = new Update();
        this.garage = new Garage();
        this.winners = new Winners();
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
        const raceBtn = document.querySelector('.race-btn');
        if (raceBtn) {
            raceBtn.addEventListener('click', (e) => this.startStopRace(e, 'started'));
        }
        const resetBtn = document.querySelector('.reset-btn');
        if (resetBtn) {
            resetBtn.addEventListener('click', (e) => this.startStopRace(e, 'stopped'));
        }
    }

    private changeTab(e: Event): void {
        const targetButton = e.target as HTMLButtonElement;
        if (targetButton.classList.contains('btn--garage')) {
            localStorage.setItem('tab', 'garage');
            this.updateTab('garage');
        } else if (targetButton.classList.contains('btn--winners')) {
            localStorage.setItem('tab', 'winners');
            this.updateTab('winners');
        }
    }

    private updateTab(tab: string) {
        const garage = document.querySelector('.garage');
        const winners = document.querySelector('.winners');

        if (tab === 'garage' && garage && winners) {
            garage.classList.remove('hidden');
            winners.classList.add('hidden');
        } else if (tab === 'winners' && garage && winners) {
            garage.classList.add('hidden');
            winners.classList.remove('hidden');
        }
    }

    public getCarId(e: Event): string | undefined {
        const button = e.target as HTMLElement;
        const buttonParent = button.parentNode as HTMLElement;
        const car =
            button.classList.contains('car__btn--start') || button.classList.contains('car__btn--stop')
                ? buttonParent
                : (buttonParent.parentNode as HTMLElement);

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
        removeWinners(id);
        this.updateGarage();
        this.updateWinners();
    }

    public async selectCar(e: Event): Promise<void> {
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

    public async updateCar(): Promise<void> {
        const updateContainer = document.querySelector('.update-form--update');
        const name = updateContainer?.querySelector('.input-name') as HTMLInputElement;
        const color = updateContainer?.querySelector('.input-color') as HTMLInputElement;
        const carId = name.dataset.id;

        if (name && color && carId) {
            await updateCars({ id: +carId, name: name.value, color: color.value as Color });
            this.updateGarage();
            name.value = '';
            color.value = '';
            name.dataset.id = '';
        }
    }

    private async startStopRace(e: Event, status: EngineMode) {
        const drive = new Drive();
        const cars = Array.from(document.querySelectorAll('.car'));

        const race = cars.map(async (car) => {
            const carWrapper = car as HTMLElement;
            const carID = carWrapper.dataset.id;
            await drive.engine(e, status, carID);
        });

        await Promise.all(race);
        this.winners.addWinnerResult(drive.chooseWinner());
        this.updateWinners();
    }

    public async updateGarage(page = state.garagePage): Promise<void> {
        const main = document.querySelector('main');

        if (main) {
            const garage = main.querySelector('.garage');
            if (garage) {
                main.removeChild(garage);
                main.appendChild(await this.garage.draw(page));
            }
        }
    }

    public async updateWinners(page = state.winnersPage): Promise<void> {
        const main = document.querySelector('main');

        if (main) {
            const winners = main.querySelector('#winners');
            console.log(winners);

            if (winners) {
                main.removeChild(winners);
                const newWinners = await this.winners.draw(page);
                main.appendChild(newWinners);
                document.location.reload();
            }
        }
    }
}

export default Events;
