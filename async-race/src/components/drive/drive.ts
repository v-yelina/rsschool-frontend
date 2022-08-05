import { startStopDriveEngine } from '../api/api';
import Events from '../eventListeners/events';
import { EngineMode } from './drive.interface';

class Drive {
    public async engine(e: Event, status: EngineMode, carId?: string) {
        const events = new Events();
        const carID = carId || events.getCarId(e);

        if (carID) {
            const carSettings = await startStopDriveEngine(carID, status);
            const car = document.querySelector(`.car${carID}`);

            if (car) {
                const startButton = car.querySelector('.car__btn--start') as HTMLButtonElement;
                const stopButton = car.querySelector('.car__btn--stop') as HTMLButtonElement;
                const carImg = car.querySelector('.car__img') as SVGElement;
                if (carImg && startButton && stopButton) {
                    if (status === 'started' && carSettings) {
                        const time = (carSettings.distance as number) / (carSettings.velocity as number);
                        this.drive(carID, time);
                        const width = car.clientWidth;
                        carImg.style.transform = `translateX(${width - 50}px)`;
                        carImg.style.transition = `${time + 5000}ms`;
                        startButton.disabled = true;
                        stopButton.disabled = false;
                    } else if (status === 'stopped') {
                        carImg.style.transform = `translateX(0px)`;
                        startButton.disabled = false;
                        carImg.style.transition = `0ms`;
                        stopButton.disabled = true;
                    }
                }
            }
        }
    }

    private async drive(carID: string, time: number) {
        try {
            await startStopDriveEngine(carID, 'drive');
            console.log('drive');
        } catch (e) {
            console.log('oops');

            const car = document.querySelector(`.car${carID}`);
            if (car) {
                const carImg = car.querySelector('.car__img') as SVGElement;
                if (carImg) {
                    carImg.style.animationPlayState = 'paused';
                }
            }
        }
    }
}

export default Drive;
